// AGIF WORLD scene — diagnosticx.agifuturefoundation.org
// Diagnostic.X — the scanning hall: scanner arch, vitals pillars, a helix of sample vials.
window.AGIF_SCENE = {
  id: "diagnosticx",
  name: "Diagnostic.X Scanning Hall",
  accent: "#22d3ee",
  sky: 0x071214, fog: [0x071214, 16, 80],
  ground: { color: 0x0d1a1c, grid: true },
  sun: { pos: [30, 60, -20], color: 0xcfeef5 },

  spawn: [0, 16],

  props: [
    { type: "gate", pos: [0, 0, -4], size: [4.5], color: 0x22d3ee,
      label: "SCANNER ARCH", onClick: { action: "toast", text: "🩺 SCANNER ARCH — hold still. AI-driven diagnostics under an AGI-safety mandate. The scan takes a moment; the mandate took longer." } },
    { type: "cyl", pos: [-6, 1.6, -2], size: [0.7, 3.2], color: 0x155e6a, flat: true,
      label: "VITALS PILLAR", onClick: { action: "toast", text: "VITALS PILLAR — steady. Very steady. Suspiciously steady." } },
    { type: "cyl", pos: [6, 1.6, -2], size: [0.7, 3.2], color: 0x155e6a, flat: true,
      label: "VITALS PILLAR II", onClick: { action: "pulse" } },
    { type: "box", pos: [8.5, 0.9, 4], size: [2.2, 1.8, 1.6], color: 0x1d2b30, flat: true,
      label: "SYSTEMS BAY", onClick: { action: "toast", text: "SYSTEMS DIAGNOSTICS BAY — we diagnose diagnostics. Recursion is covered under the mandate." } },
    { type: "box", pos: [-8.5, 1.0, 3.5], size: [1.8, 2, 1.8], color: 0x26414a, flat: true,
      label: "COLD LOCKER", onClick: { action: "toast", text: "COLD LOCKER — samples kept cold and catalogued. Warm takes are stored elsewhere." } },
    { type: "box", pos: [3.5, 0.8, 7], size: [1.6, 1.6, 1], color: 0x22d3ee, flat: true,
      label: "THESIS TERMINAL", onClick: { action: "link", url: "https://www.agifuturefoundation.org/articles/diagnostic-x-thesis/" } },
    { type: "cyl", pos: [-3.5, 0.9, 7], size: [0.8, 1.8], color: 0x334155, flat: true,
      label: "FOUNDATION UPLINK", onClick: { action: "link", url: "https://github.com/AGIFutureFoundation" } },
  ],

  agents: [
    { name: "TRIAGE-PRIME", role: "intake", pos: [-2.5, 3], color: 0x22d3ee, accentColor: "#22d3ee", lines: [
      "Step through the arch. AI-driven diagnostics on one side, systems diagnostics on the other, mandate over everything.",
      "Commercial healthcare, liability-isolated inside the 66-W3 series. The paperwork is load-bearing.",
      "We're in development. Bring symptoms. Or better: don't.",
    ] },
    { name: "VITALS", role: "monitoring", pos: [6, 0.5], color: 0x67e8f9, accentColor: "#22d3ee", lines: [
      "The pillars read vitals, the helix queues samples, I read the pillars. It's graphs all the way down.",
      "An AGI-safety mandate governs this platform. It signs off on everything, including that sentence.",
    ] },
    { name: "WARDEN-66", role: "liability isolation", pos: [-5, 6], color: 0x94a3b8, accentColor: "#22d3ee", lines: [
      "I keep the diagnostic decisions inside 66-W3 and the lawsuits firmly outside it.",
      "The thesis terminal holds the long version. The arch is the short version: hold still.",
    ] },
  ],

  decor: [
    { type: "pillars", count: 18, radius: 26, color: 0x10262b, h: 4.5 },
    { type: "crystals", count: 10, radius: 14, color: 0x0e7490, h: 1.6 },
  ],

  eggs: {
    duck: true, duckPos: [-14, 0, -12],
    konami: "🎮 FULL PANEL — every scan returns 'come back when we ship'. We ARE in development. (easter egg 2/2)",
  },

  // bespoke hero: the sample helix — vials winding up a cold spine
  build: (THREE, world, api) => {
    const helix = new THREE.Group();
    const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5.4, 6), api.mat(0x155e6a, true));
    spine.position.y = 3;
    helix.add(spine, api.blobShadow(1.6));
    for (let i = 0; i < 14; i++) {
      const a = i * 0.8, y = 1 + i * 0.32;
      const vial = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.45, 6), api.mat(0x7dd3fc, true));
      body.position.y = 0.22;
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), api.mat(0x22d3ee, true));
      cap.position.y = 0.5;
      vial.add(body, cap);
      vial.position.set(Math.cos(a) * 1.0, y, Math.sin(a) * 1.0);
      helix.add(vial);
    }
    helix.position.set(0, 0, -10);
    helix.userData.label = "SAMPLE HELIX";
    helix.userData.onClick = { action: "toast", text: "🧪 SAMPLE HELIX — the queue. First in, first out, cryo throughout, judgemental always." };
    api.clickables.push(helix);
    world.add(helix);
  },
};
