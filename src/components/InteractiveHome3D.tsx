import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CORE_SERVICES, COMPANY_INFO } from '../data/servicesData';
import { 
  Sun, 
  Zap, 
  Flame, 
  Hammer, 
  Droplet, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  MessageCircle, 
  RotateCcw,
  Sparkles,
  PhoneCall,
  ChevronRight,
  Compass
} from 'lucide-react';

interface InteractiveHome3DProps {
  onSelectService?: (serviceId: string) => void;
}

export const InteractiveHome3D: React.FC<InteractiveHome3DProps> = ({ onSelectService }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>('solar-energy');
  const [isRotating, setIsRotating] = useState<boolean>(true);

  // References for Three.js
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const houseGroupRef = useRef<THREE.Group | null>(null);
  const hotspotsMeshesRef = useRef<{ [key: string]: THREE.Mesh }>({});

  const activeService = CORE_SERVICES.find(s => s.id === activeServiceId) || CORE_SERVICES[0];

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 520;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x070d1e);
    scene.fog = new THREE.FogExp2(0x070d1e, 0.035);

    // 2. Camera setup - well framed so the entire house is visible with room to breathe
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(7.5, 5.5, 9.5);
    camera.lookAt(0, 0.9, 0);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    rendererRef.current = renderer;
    container.replaceChildren(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffae6, 2.0);
    dirLight.position.set(12, 18, 12);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Accent Rim Lights
    const cyanPoint = new THREE.PointLight(0x00e1ff, 1.4, 15);
    cyanPoint.position.set(-5, 4, -4);
    scene.add(cyanPoint);

    const amberPoint = new THREE.PointLight(0xffa200, 1.6, 16);
    amberPoint.position.set(4, 5, 4);
    scene.add(amberPoint);

    // 5. Build 3D House Environment
    const houseGroup = new THREE.Group();
    houseGroupRef.current = houseGroup;
    scene.add(houseGroup);

    // Ground Platform
    const groundGeo = new THREE.CylinderGeometry(5.6, 5.9, 0.4, 40);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0f182f,
      roughness: 0.8,
      metalness: 0.2,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.2;
    ground.receiveShadow = true;
    houseGroup.add(ground);

    // Foundation & Driveway
    const driveGeo = new THREE.BoxGeometry(2.6, 0.42, 5.0);
    const driveMat = new THREE.MeshStandardMaterial({
      color: 0x1a2642,
      roughness: 0.7,
    });
    const driveway = new THREE.Mesh(driveGeo, driveMat);
    driveway.position.set(2.4, -0.19, 1.2);
    driveway.receiveShadow = true;
    houseGroup.add(driveway);

    // Main House Structure
    const houseGeo = new THREE.BoxGeometry(3.8, 2.4, 3.4);
    const houseMat = new THREE.MeshStandardMaterial({
      color: 0x192747,
      roughness: 0.4,
      metalness: 0.15,
    });
    const house = new THREE.Mesh(houseGeo, houseMat);
    house.position.set(-0.3, 1.2, -0.2);
    house.castShadow = true;
    house.receiveShadow = true;
    houseGroup.add(house);

    // Second Story Modern Wing
    const upperGeo = new THREE.BoxGeometry(2.4, 1.5, 2.4);
    const upperMat = new THREE.MeshStandardMaterial({
      color: 0x22365e,
      roughness: 0.35,
    });
    const upperWing = new THREE.Mesh(upperGeo, upperMat);
    upperWing.position.set(-1.0, 2.7, -0.2);
    upperWing.castShadow = true;
    houseGroup.add(upperWing);

    // Angled Modern Roof
    const roofGeo = new THREE.BoxGeometry(3.0, 0.16, 3.0);
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x0a101f,
      roughness: 0.2,
      metalness: 0.85,
    });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(-1.0, 3.5, -0.2);
    roof.rotation.x = 0.22;
    roof.castShadow = true;
    houseGroup.add(roof);

    // Solar PV Panels on Roof (Trade 3)
    const panelGroup = new THREE.Group();
    panelGroup.position.set(-1.0, 3.58, -0.2);
    panelGroup.rotation.x = 0.22;

    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 3; c++) {
        const panelGeo = new THREE.BoxGeometry(0.82, 0.04, 1.2);
        const panelMat = new THREE.MeshStandardMaterial({
          color: 0x06152d,
          roughness: 0.1,
          metalness: 0.95,
          emissive: 0x0284c7,
          emissiveIntensity: 0.3,
        });
        const panel = new THREE.Mesh(panelGeo, panelMat);
        panel.position.set((c - 1) * 0.9, 0.04, (r - 0.5) * 1.3);
        panel.castShadow = true;
        panelGroup.add(panel);

        const frameGeo = new THREE.BoxGeometry(0.85, 0.02, 1.24);
        const frameMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 });
        const frame = new THREE.Mesh(frameGeo, frameMat);
        frame.position.copy(panel.position);
        frame.position.y -= 0.02;
        panelGroup.add(frame);
      }
    }
    houseGroup.add(panelGroup);

    // Windows with Warm Glow
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.65,
      roughness: 0.1,
    });
    const window1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.9, 0.05), windowMat);
    window1.position.set(-0.4, 1.3, 1.52);
    houseGroup.add(window1);

    const window2 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.8, 0.05), windowMat);
    window2.position.set(-1.0, 2.7, 1.02);
    houseGroup.add(window2);

    // Entrance Door
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.3 });
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.4, 0.05), doorMat);
    door.position.set(0.95, 0.7, 1.52);
    houseGroup.add(door);

    // Electrical DB Box (Trade 1)
    const dbGeo = new THREE.BoxGeometry(0.32, 0.5, 0.14);
    const dbMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.5,
    });
    const dbBox = new THREE.Mesh(dbGeo, dbMat);
    dbBox.position.set(-2.22, 1.0, 0.6);
    houseGroup.add(dbBox);

    // LPG Gas Bottle in Cage (Trade 2)
    const lpgCageGroup = new THREE.Group();
    lpgCageGroup.position.set(1.75, 0.45, -0.6);
    const gasCylGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.7, 16);
    const gasCylMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.4,
      roughness: 0.3,
    });
    const gasCyl = new THREE.Mesh(gasCylGeo, gasCylMat);
    lpgCageGroup.add(gasCyl);

    const cageGeo = new THREE.BoxGeometry(0.55, 0.85, 0.55);
    const cageMat = new THREE.MeshBasicMaterial({ color: 0x64748b, wireframe: true });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    lpgCageGroup.add(cage);
    houseGroup.add(lpgCageGroup);

    // Perimeter Wall with Electric Fence (Trade 7)
    const wallGeo = new THREE.BoxGeometry(0.2, 0.95, 5.2);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const perimWall = new THREE.Mesh(wallGeo, wallMat);
    perimWall.position.set(3.0, 0.48, 0);
    perimWall.castShadow = true;
    houseGroup.add(perimWall);

    // Electric Fence Strands
    const fenceGroup = new THREE.Group();
    fenceGroup.position.set(3.0, 0.95, 0);
    for (let f = 0; f < 5; f++) {
      const strandGeo = new THREE.CylinderGeometry(0.009, 0.009, 5.2, 8);
      const strandMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const strand = new THREE.Mesh(strandGeo, strandMat);
      strand.rotation.x = Math.PI / 2;
      strand.position.y = 0.1 + f * 0.09;
      fenceGroup.add(strand);
    }
    for (let p = -2.3; p <= 2.3; p += 1.4) {
      const poleGeo = new THREE.BoxGeometry(0.04, 0.6, 0.04);
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x000000, metalness: 0.85 });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(0, 0.28, p);
      fenceGroup.add(pole);
    }
    houseGroup.add(fenceGroup);

    // Security Siren (Trade 6)
    const sirenGeo = new THREE.ConeGeometry(0.12, 0.25, 12);
    const sirenMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.9,
    });
    const siren = new THREE.Mesh(sirenGeo, sirenMat);
    siren.rotation.z = -Math.PI / 2;
    siren.position.set(0.95, 1.9, 1.55);
    houseGroup.add(siren);

    // Plumbing Pipes (Trade 5)
    const pipeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.1, 0.1, -1.0),
      new THREE.Vector3(-2.1, 0.9, -1.0),
      new THREE.Vector3(-2.1, 0.9, -0.3),
      new THREE.Vector3(-2.1, 0.2, -0.3),
    ]);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 20, 0.045, 8, false);
    const pipeMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.85,
      roughness: 0.2,
    });
    const pipeMesh = new THREE.Mesh(pipeGeo, pipeMat);
    houseGroup.add(pipeMesh);

    // RDT Branded Bakkie / Work Truck
    const truckGroup = new THREE.Group();
    truckGroup.position.set(2.4, 0.26, 1.8);
    truckGroup.rotation.y = -Math.PI / 1.15;

    const cabGeo = new THREE.BoxGeometry(0.75, 0.65, 0.85);
    const cabMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });
    const cab = new THREE.Mesh(cabGeo, cabMat);
    cab.position.set(0, 0.22, 0.35);
    truckGroup.add(cab);

    const bedGeo = new THREE.BoxGeometry(0.78, 0.38, 1.1);
    const bedMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.5 });
    const bed = new THREE.Mesh(bedGeo, bedMat);
    bed.position.set(0, 0.09, -0.6);
    truckGroup.add(bed);

    for (let wx = -0.42; wx <= 0.42; wx += 0.84) {
      for (let wz = -0.65; wz <= 0.45; wz += 1.1) {
        const wheelGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.09, 14);
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.9 });
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(wx, -0.08, wz);
        truckGroup.add(wheel);
      }
    }
    houseGroup.add(truckGroup);

    // 6. Interactive 3D Hotspot Pins
    CORE_SERVICES.forEach((srv) => {
      const pinGroup = new THREE.Group();
      const coords = srv.hotspot3D.coordinates;
      pinGroup.position.set(coords[0], coords[1], coords[2]);

      const ringGeo = new THREE.RingGeometry(0.18, 0.25, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: srv.id === 'solar-energy' || srv.id === 'electrical' ? 0xf59e0b : srv.id === 'security' ? 0xef4444 : 0x06b6d4,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.name = `ring_${srv.id}`;
      pinGroup.add(ring);

      const sphereGeo = new THREE.SphereGeometry(0.1, 16, 16);
      const sphereMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.name = `hotspot_${srv.id}`;
      pinGroup.add(sphere);

      hotspotsMeshesRef.current[srv.id] = sphere;
      houseGroup.add(pinGroup);
    });

    // 7. Mouse Orbit & Raycasting
    let isMouseDown = false;
    let prevMouseX = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      setIsRotating(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) {
        const rect = container.getBoundingClientRect();
        const mouse = new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -((e.clientY - rect.top) / rect.height) * 2 + 1
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const clickableObjects = Object.values(hotspotsMeshesRef.current);
        const intersects = raycaster.intersectObjects(clickableObjects);

        if (intersects.length > 0) {
          container.style.cursor = 'pointer';
        } else {
          container.style.cursor = 'grab';
        }
        return;
      }

      const deltaX = e.clientX - prevMouseX;
      prevMouseX = e.clientX;

      if (houseGroupRef.current) {
        houseGroupRef.current.rotation.y += deltaX * 0.008;
      }
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const clickableObjects = Object.values(hotspotsMeshesRef.current);
      const intersects = raycaster.intersectObjects(clickableObjects);

      if (intersects.length > 0) {
        const hitName = intersects[0].object.name;
        const srvId = hitName.replace('hotspot_', '');
        setActiveServiceId(srvId);
        if (onSelectService) onSelectService(srvId);
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('click', handleClick);

    // 8. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (isRotating && houseGroupRef.current) {
        houseGroupRef.current.rotation.y += 0.0022;
      }

      CORE_SERVICES.forEach((srv) => {
        const ring = scene.getObjectByName(`ring_${srv.id}`);
        if (ring) {
          ring.quaternion.copy(camera.quaternion);
          const scale = 1 + Math.sin(elapsed * 4 + (srv.id.length || 0)) * 0.16;
          ring.scale.set(scale, scale, scale);
        }
      });

      renderer.render(scene, camera);
      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight || 520;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isRotating, onSelectService]);

  const selectService = (id: string) => {
    setActiveServiceId(id);
    if (onSelectService) onSelectService(id);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'electrical': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'lpg-gas': return <Flame className="w-5 h-5 text-cyan-400" />;
      case 'solar-energy': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'construction': return <Hammer className="w-5 h-5 text-emerald-400" />;
      case 'plumbing': return <Droplet className="w-5 h-5 text-sky-400" />;
      case 'security': return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'electric-fence': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="w-full rounded-3xl overflow-hidden border border-slate-700/80 bg-gradient-to-b from-[#0b1328] via-[#091022] to-[#060b18] shadow-2xl">
      {/* Visualizer Top Header */}
      <div className="p-6 md:p-8 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950/60">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
            <span>Interactive 3D Architectural Visualizer</span>
          </div>
          <h3 className="text-xl md:text-3xl font-black text-white tracking-tight">
            Explore All 7 Certified Domestic Disciplines
          </h3>
          <p className="text-xs md:text-sm text-slate-300 mt-1">
            Click any trade zone or hotspot pin below to inspect specifications.
          </p>
        </div>

        {/* 3D Action Controls */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1.5 text-xs text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Click & Drag to Rotate 360°</span>
          </div>

          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
              isRotating
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 border border-slate-700'
            }`}
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            <span>{isRotating ? 'Auto-Rotate ON' : 'Paused (Manual)'}</span>
          </button>
        </div>
      </div>

      {/* Clean Side-by-Side Architectural Layout: Unobstructed 3D on Left, Dedicated Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* Left Column: 100% UNBLOCKED 3D Canvas (No modal overlapping the house!) */}
        <div className="lg:col-span-7 xl:col-span-8 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] bg-[#070d1e] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-800/80">
          <div 
            ref={mountRef} 
            className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] cursor-grab active:cursor-grabbing select-none"
          />

          {/* Clean bottom tip banner on canvas */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none text-[11px] text-slate-400">
            <span className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800">
              💡 Tip: Click any glowing pin directly on the 3D model
            </span>
            <span className="hidden sm:inline bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 font-mono text-amber-400">
              Richards Bay, ZA
            </span>
          </div>
        </div>

        {/* Right Column: Dedicated Inspector & Trade Controls (Completely separated, never blocks the 3D model!) */}
        <div className="lg:col-span-5 xl:col-span-4 p-6 sm:p-7 flex flex-col justify-between bg-slate-950/80 backdrop-blur-md space-y-6">
          {/* Active Trade Details */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Active Zone: {activeService.hotspot3D.title}
              </span>
              {activeService.cocIncluded && (
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  COC Included
                </span>
              )}
            </div>

            <div className="flex items-start space-x-3.5 mb-3">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 flex-shrink-0">
                {getServiceIcon(activeService.id)}
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {activeService.name}
                </h4>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
                  {activeService.complianceBadge}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {activeService.hotspot3D.description}
            </p>

            {/* Feature Bullets */}
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-850 space-y-2 mb-4">
              {activeService.features.slice(0, 3).map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp Dispatch */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Tania,%20I'm%20exploring%20your%203D%20website%20and%20interested%20in%20a%20quote%20for:%20${encodeURIComponent(activeService.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-amber-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Tania</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center space-x-1.5 border border-slate-700 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Rudi</span>
              </a>
            </div>
          </div>

          {/* Quick Zone Switcher List */}
          <div className="pt-4 border-t border-slate-850">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Switch 3D Zone:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
              {CORE_SERVICES.map((srv) => {
                const isCurrent = srv.id === activeServiceId;
                return (
                  <button
                    key={srv.id}
                    onClick={() => selectService(srv.id)}
                    className={`w-full p-2 rounded-xl text-left text-xs flex items-center justify-between transition-all ${
                      isCurrent
                        ? 'bg-amber-500/15 border border-amber-500/50 text-white font-bold'
                        : 'bg-slate-900/60 hover:bg-slate-850 border border-transparent text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span className="scale-75">{getServiceIcon(srv.id)}</span>
                      <span className="truncate">{srv.shortName}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 ${isCurrent ? 'text-amber-400' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
