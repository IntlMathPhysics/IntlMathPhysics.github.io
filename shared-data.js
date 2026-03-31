window.SJPO_SHARED = (() => {
  const STORAGE_KEYS = {
    questionBank: "sjpo2023_question_bank_v2",
    submissions: "sjpo2023_submissions_v2",
    teacherSession: "sjpo2023_teacher_session",
    teacherIds: "sjpo2023_teacher_ids_v2",
    studentIds: "sjpo2023_student_ids_v2"
  };

  const DEFAULT_TEACHER_IDS = ["TEACHER001"];
  const DEFAULT_STUDENT_IDS = [
    "IMP1009","IMP1093","IMP1213","IMP1301","IMP1427","IMP1493","IMP1567","IMP1619","IMP1721","IMP1811",
    "IMP1889","IMP1993","IMP2063","IMP2113","IMP2213","IMP2309","IMP2377","IMP2441","IMP2531","IMP2621",
    "IMP2689","IMP2791","IMP2909","IMP3023","IMP3109","IMP3191","IMP3319","IMP3373","IMP3449","IMP3511",
    "IMP3559","IMP3643","IMP3709","IMP3719","IMP3779","IMP3797","IMP3877","IMP3943","IMP4073","IMP4211",
    "IMP4273","IMP4373","IMP4423","IMP4481","IMP4583","IMP4673","IMP4759","IMP4817","IMP4951","IMP5059",
    "IMP5153","IMP5273","IMP5351","IMP5471","IMP5569","IMP5669","IMP5791","IMP5867","IMP5981","IMP6073",
    "IMP6203","IMP6271","IMP6361","IMP6473","IMP6571","IMP6691","IMP6779","IMP6833","IMP6949","IMP7013",
    "IMP7103","IMP7213","IMP7309","IMP7451","IMP7523","IMP7591","IMP7717","IMP7817","IMP7933","IMP8089",
    "IMP8221","IMP8291","IMP8423","IMP8543","IMP8629","IMP8699","IMP8821","IMP8831","IMP8963","IMP9103",
    "IMP9181","IMP9311","IMP9403","IMP9461","IMP9539","IMP9601","IMP9689","IMP9803","IMP9859","IMP9967"
  ];

  const DEFAULT_BANK = {
    categories: [
      { id: "kinematics-dynamics", name: "Kinematics & Dynamics", icon: "🏃", description: "Motion, forces, Newton's laws & equilibrium" },
      { id: "energy-momentum-rotation", name: "Energy, Momentum & Rotation", icon: "💥", description: "Work, energy, momentum, collisions & rotation" },
      { id: "thermal-physics", name: "Thermal Physics", icon: "🌡️", description: "Heat, gas laws & thermodynamics" },
      { id: "oscillations-waves", name: "Oscillations & Waves", icon: "〰️", description: "SHM, springs, wave properties & sound" },
      { id: "optics-fluids", name: "Optics & Fluids", icon: "💡", description: "Geometric optics, polarisation & fluid mechanics" },
      { id: "electricity", name: "Electricity", icon: "🔋", description: "Electric fields, circuits, capacitors & EMF" },
      { id: "magnetism-em", name: "Magnetism & EM", icon: "🧲", description: "Magnetic force, induction, EM waves & relativity" }
    ],
    questions: [
      { id: 1, categoryId: "kinematics-dynamics", chapter: "Kinematics", subtopic: "Average Speed", text: "Four objects are dropped from rest at different heights. Air resistance is negligible. Which object has the <strong>largest average speed</strong> during its fall?", options: ["(a) 16.0 kg, 7.0 m","(b) 4.0 kg, 4.0 m","(c) 4.0 kg, 4.0 m","(d) 8.0 kg, 1.0 m","(e) 1.0 kg, 8.0 m"], answer: 4 },
      { id: 2, categoryId: "kinematics-dynamics", chapter: "Kinematics", subtopic: "Velocity-Time Graph", text: "Two runners take part in a marathon. Runner 1 has a linearly increasing speed. Runner 2's speed increases then decreases. Their speeds are equal at time \\(t\\).<br><br>Which are <strong>true</strong> at time \\(t\\)?<br><br>(i) Runner 1 just overtakes Runner 2.<br>(ii) Both runners are at the same speed.<br>(iii) Runner 1 runs with zero acceleration.<br>(iv) Runner 2 is ahead of Runner 1.", options: ["(ii), (iii), and (iv)","(ii) and (iv) only","(i) and (iii) only","(i) only"], answer: 1 },
      { id: 3, categoryId: "kinematics-dynamics", chapter: "Kinematics", subtopic: "Kinetic Energy & Mass", text: "A truck moves at 40 km/h and a car at 60 km/h. The truck's kinetic energy is 1.5 times the car's. What is \\(m_{\\text{truck}} : m_{\\text{car}}\\)?", options: ["9 : 1","9 : 8","9 : 2","9 : 4"], answer: 3 },
      { id: 4, categoryId: "kinematics-dynamics", chapter: "Kinematics", subtopic: "Accel-Time Graph", text: "The area under an object's <em>acceleration-time</em> graph over a fixed interval is 10 m/s. Which must be true?", options: ["The change in velocity during the interval is 10 m/s.","The velocity at the end of the interval is 10 m/s.","The average speed during the interval is 10 m/s.","The average velocity during the interval is 10 m/s."], answer: 0 },
      { id: 5, categoryId: "energy-momentum-rotation", chapter: "Kinematics", subtopic: "Circular Motion", text: "An object moves in a vertical circle from the bottom with initial speed 4.0 m/s, increasing uniformly through 50° clockwise. Average acceleration is 2.5 m/s² <strong>straight upwards</strong>. Time taken?", options: ["0.652 s","0.889 s","1.91 s","1.23 s"], answer: 3 },
      { id: 6, categoryId: "energy-momentum-rotation", chapter: "Dynamics & Forces", subtopic: "Newton 2nd Law", text: "On Mars (\\(g=4\\text{ m s}^{-2}\\)), a space gun accelerates a 3000 kg satellite from rest to 9000 m/s in 0.4 s. <strong>Applied launch force?</strong>", options: ["67 512 kN","67 500 kN","67 488 kN","67 530 kN"], answer: 0 },
      { id: 7, categoryId: "optics-fluids", chapter: "Dynamics & Forces", subtopic: "Scale Reading", text: "A 70 kg man stands on a scale in an elevator that first accelerates at 3 m/s² downwards, then descends at constant speed. Scale reading at <strong>constant speed</strong>?", options: ["91 kg","49 kg","70 kg","0 kg"], answer: 2 },
      { id: 8, categoryId: "optics-fluids", chapter: "Dynamics & Forces", subtopic: "Tension & Newton 2nd Law", text: "Three identical 5 kg boxes on a frictionless surface are pulled by 30 N (applied to the rightmost box). Find common acceleration \\(a\\) and tensions \\(T_1\\) (left pair), \\(T_2\\) (middle pair).", options: ["\\(a=4\\text{ m/s}^2,\\;T_1=30\\text{ N},\\;T_2=0\\text{ N}\\)","\\(a=2\\text{ m/s}^2,\\;T_1=10\\text{ N},\\;T_2=20\\text{ N}\\)","\\(a=2\\text{ m/s}^2,\\;T_1=30\\text{ N},\\;T_2=30\\text{ N}\\)","\\(a=6\\text{ m/s}^2,\\;T_1=30\\text{ N},\\;T_2=0\\text{ N}\\)"], answer: 1 },
      { id: 9, categoryId: "thermal-physics", chapter: "Dynamics & Forces", subtopic: "Impulse & Momentum", text: "A 1.5 kg ball hits the ground at 1.2 m/s, rebounds at 0.5 m/s. Average ground force = 30.0 N. <strong>Duration of contact?</strong>", options: ["0.0085 s","0.0350 s","0.0697 s","0.0167 s"], answer: 1 },
      { id: 10, categoryId: "thermal-physics", chapter: "Electricity", subtopic: "Electric Potential & Work", text: "A negatively charged particle moves at constant speed from \\(x=-6.0\\) m to \\(x=-3.0\\) m. \\(V(-6.0)=-4.0\\) V, \\(V(-3.0)=-2.0\\) V. Work by external agent and direction of electric field?", options: ["Positive work; field to the right.","Positive work; field to the left.","Negative work; field to the right.","Negative work; field to the left."], answer: 3 },
      { id: 11, categoryId: "oscillations-waves", chapter: "Dynamics & Forces", subtopic: "Friction & Inclined Rope", text: "A 50 kg block accelerates horizontally at 2 m/s², pulled by a rope at 30° above horizontal. Magnitude of the <strong>frictional force</strong>?", options: ["283 N","950 N","750 N","183 N"], answer: 3 },
      { id: 12, categoryId: "optics-fluids", chapter: "Rotation & Gravitation", subtopic: "Angular Kinematics", text: "A wheel starts at \\(\\omega=5\\) rad/s with constant angular acceleration 4 rad/s². Time to complete <strong>2 full revolutions</strong>?", options: ["0.9 s","4.1 s","1.6 s","2.5 s"], answer: 2 },
      { id: 13, categoryId: "kinematics-dynamics", chapter: "Rotation & Gravitation", subtopic: "Orbital Velocity", text: "A geostationary satellite orbits at height \\(H\\) above Earth (radius \\(R\\)). A person at the surface has tangential speed \\(U\\). Satellite's <strong>tangential speed</strong> \\(V\\)?", options: ["\\(V=RU\\)","\\(V=\\dfrac{U(R+H)}{R}\\)","\\(V=\\dfrac{UH}{R}\\)","\\(V=\\dfrac{UR}{H}\\)"], answer: 1 },
      { id: 14, categoryId: "kinematics-dynamics", chapter: "Rotation & Gravitation", subtopic: "Rotational KE", text: "A solid cylinder (mass 4 kg, radius 2 m) rolls without slipping at 10 m/s. <strong>Rotational KE?</strong> \\((I=\\tfrac{1}{2}MR^2)\\)", options: ["400 J","200 J","100 J","1600 J"], answer: 1 },
      { id: 15, categoryId: "energy-momentum-rotation", chapter: "Rotation & Gravitation", subtopic: "Angular Momentum Conservation", text: "A child on a free-spinning merry-go-round moves <strong>towards the centre</strong>. Angular velocity?", options: ["Remains the same.","Increases.","Merry-go-round stops.","Decreases."], answer: 1 },
      { id: 16, categoryId: "energy-momentum-rotation", chapter: "Fluids & Optics", subtopic: "Fluid Pressure", text: "A sealed cup of water has a striped straw through its side. A plain straw is pushed through the lid with its lower end below the striped straw.<br><br>(i) How high must the plain straw be raised for water to flow out?<br>(ii) Can you lower it back to the same height to stop the flow?", options: ["(i) Above striped straw (air enters). (ii) Stopping height is lower.","(i) Above striped straw (air enters). (ii) Depends on water lost.","(i) Above striped straw (pressure). (ii) Flow stops once below striped straw.","(i) Above striped straw (pressure). (ii) Can lower to above striped straw — dynamic pressure effect."], answer: 3 },
      { id: 17, categoryId: "kinematics-dynamics", chapter: "Fluids & Optics", subtopic: "Bernoulli Principle", text: "Water flows in a horizontal pipe at 4 m/s and 200 000 Pa at A. Pipe narrows at B where speed = 8 m/s. No viscous losses. <strong>Pressure at B?</strong>", options: ["24 000 Pa","224 000 Pa","176 000 Pa","100 000 Pa"], answer: 2 },
      { id: 18, categoryId: "energy-momentum-rotation", chapter: "Oscillations & Waves", subtopic: "Wave Properties", text: "What changes when a <strong>transverse wave</strong> passes from one medium to another?", options: ["Speed and wavelength only","Speed, wavelength, and frequency","Speed and frequency only","Wavelength and frequency only"], answer: 0 },
      { id: 19, categoryId: "electricity", chapter: "Oscillations & Waves", subtopic: "Speed of Sound", text: "Sound passes through two materials before reaching a microphone. Which combination gives the <strong>shortest travel time</strong>?", options: ["Air → air","Air → aluminium","Water → air","Water → aluminium"], answer: 3 },
      { id: 20, categoryId: "magnetism-em", chapter: "Physical Optics", subtopic: "EM Induction Loop", text: "Two identical linear polarising filters are crossed at 90° in natural light of intensity \\(I_0\\). Maximum transmitted intensity if 20 additional filters are inserted between them?", options: ["\\(0.445\\,I_0\\)","\\(0.439\\,I_0\\)","\\(0.889\\,I_0\\)","\\(0.878\\,I_0\\)"], answer: 0 },
      { id: 21, categoryId: "kinematics-dynamics", chapter: "Oscillations & Waves", subtopic: "Wave Superposition", text: "A wave: \\[y(t)=3\\cos 2\\pi t+3\\sqrt{2}\\cos 3\\pi t+\\sqrt{2}\\cos 4\\pi t\\] <strong>Period?</strong>", options: ["4 s","2 s","3 s","5 s"], answer: 1 },
      { id: 22, categoryId: "energy-momentum-rotation", chapter: "Electricity", subtopic: "Electrostatics Conductors", text: "Plates 1, 2, 4 are charged plastic; plate 3 is a neutral copper plate. Plates 1 & 2 repel. Plate 2 is attracted to plates 3 and 4. How do plates 2 & 4 and plates 3 & 4 interact?", options: ["2 & 4 attract; 3 & 4 attract.","2 & 4 repel; 3 & 4 repel.","2 & 4 repel; 3 & 4 attract.","2 & 4 attract; 3 & 4 repel."], answer: 2 },
      { id: 23, categoryId: "energy-momentum-rotation", chapter: "Electricity", subtopic: "Charge Distribution", text: "Neutral conducting block, cavities J, K, L, M. Charge \\(+3q\\) in J. Three charges in K, L, M. Charge \\(+6q\\) on outer surface. Which combination for K, L, M is possible?", options: ["\\(-q,\\;+3q,\\;+2q\\)","\\(+q,\\;-2q,\\;+4q\\)","\\(-3q,\\;+2q,\\;+3q\\)","\\(-3q,\\;+2q,\\;+q\\)"], answer: 3 },
      { id: 24, categoryId: "thermal-physics", chapter: "Electricity", subtopic: "Electric Field & Potential", text: "Particle 1: \\(-q\\) at \\((+a,0)\\). Particle 2: unknown \\(Q\\) at \\((0,+a)\\). Field at origin: \\(\\dfrac{q}{2\\pi\\varepsilon_0 a^2}\\). Potential: \\(+\\dfrac{q}{4\\pi\\varepsilon_0 a}\\). Find \\(Q\\).", options: ["\\(+\\dfrac{2q}{\\sqrt{3}}\\)","\\(-\\dfrac{2q}{3}\\)","\\(-\\dfrac{2q}{\\sqrt{3}}\\)","\\(+\\dfrac{2q}{3}\\)"], answer: 0 },
      { id: 25, categoryId: "oscillations-waves", chapter: "Electricity", subtopic: "Electric Potential Energy", text: "Charge \\(Q\\) at centre and 6 corners of a regular hexagon of side \\(a\\) (7 charges). <strong>Total electric potential energy?</strong>", options: ["\\(\\dfrac{11}{4}\\dfrac{Q^2}{\\pi\\varepsilon_0 a}\\)","\\(\\dfrac{5.48}{4}\\dfrac{Q^2}{\\pi\\varepsilon_0 a}\\)","\\(\\dfrac{21.9}{4}\\dfrac{Q^2}{\\pi\\varepsilon_0 a}\\)","\\(\\dfrac{43.9}{4}\\dfrac{Q^2}{\\pi\\varepsilon_0 a}\\)"], answer: 2 },
      { id: 26, categoryId: "oscillations-waves", chapter: "Magnetism", subtopic: "EM Induction Moving Loop", text: "Loops A (above) and B (below) are near a wire with current to the right. Both loops move <strong>away</strong>. Induced conventional currents?", options: ["A: Clockwise; B: Anticlockwise","A: Anticlockwise; B: Clockwise","A: No current; B: No current","A: Anticlockwise; B: Anticlockwise"], answer: 1 },
      { id: 27, categoryId: "optics-fluids", chapter: "Electricity", subtopic: "Faraday Law / EMF", text: "Decreasing field (into page) produces constant EMF \\(\\mathcal{E}\\) in a square loop with 3 identical bulbs (\\(R\\) each). Voltmeter across one bulb through loop centre. <strong>Voltmeter reading?</strong>", options: ["\\(\\mathcal{E}/4\\)","\\(\\mathcal{E}\\)","\\(\\mathcal{E}/2\\)","\\(\\mathcal{E}/6\\)"], answer: 2 },
      { id: 28, categoryId: "optics-fluids", chapter: "Electricity", subtopic: "EM Induction Coil", text: "400-turn square coil, side 9.0 cm, perpendicular field drops from 0.50 T to 0 in 6.0 s. <strong>Average induced EMF?</strong>", options: ["0.27 V","3 V","0.16 V","2700 V"], answer: 0 },
      { id: 29, categoryId: "electricity", chapter: "Electricity", subtopic: "Circuit Analysis", text: "Five identical bulbs (\\(R\\) each), battery EMF \\(\\mathcal{E}\\), switch S closed. Which are true?<br><br>(i) Bulb 1 brighter. (ii) Bulbs 2 & 4 equally bright. (iii) Bulbs 3 & 4 equally bright. (iv) Bulbs 4 & 5 equally bright.", options: ["(i) and (iv) only","All four","(i), (ii), and (iv)","(i) only"], answer: 2 },
      { id: 30, categoryId: "electricity", chapter: "Energy & Momentum", subtopic: "Specific Heat & Latent Heat", text: "100 g lead bullet at 300 m/s stops in ice at 0°C. Bullet temperature drops 250°C. Ice melted?<br>(Specific heat lead = 0.128 kJ/kg·K; Latent heat fusion ice = 336 kJ/kg)", options: ["9.52 g","1830 g","13.4 g","22.9 g"], answer: 2 },
      { id: 31, categoryId: "electricity", chapter: "Thermal Physics", subtopic: "Specific Heat Capacity", text: "Aluminium: specific heat 0.9 kJ/kg·K. A 3 kg block heated 60 s by 200 W heater. <strong>Possible</strong> temperature rise?", options: ["4.6°C","3.8°C","45.0°C","6.0°C"], answer: 0 },
      { id: 32, categoryId: "magnetism-em", chapter: "Thermal Physics", subtopic: "Ideal Gas Law", text: "Scuba diver blows bubble of radius \\(R\\) at depth 15 m; surface radius = 4.07 cm. Find \\(R\\). (\\(\\rho=1000\\) kg/m³, constant temperature.)", options: ["3.59 cm","2.60 cm","1.66 cm","3.02 cm"], answer: 3 },
      { id: 33, categoryId: "optics-fluids", chapter: "Thermal Physics", subtopic: "Absolute Zero", text: "Which statement about <strong>absolute zero</strong> is correct?", options: ["All particles, including electrons, stop moving.","The substance cannot get any colder.","Particles will have zero volume.","The internal energy reaches zero."], answer: 1 },
      { id: 34, categoryId: "optics-fluids", chapter: "Thermal Physics", subtopic: "Gas Law Gauge Pressure", text: "Bicycle tyre at 25°C, gauge pressure 150 kPa. Temperature rises 15°C, volume unchanged. <strong>Increase in gauge pressure?</strong>", options: ["7.55 kPa","163 kPa","90.0 kPa","13.0 kPa"], answer: 0 },
      { id: 35, categoryId: "kinematics-dynamics", chapter: "Kinematics", subtopic: "Relative Motion", text: "Alice on a train at constant velocity throws a package to Bob beside the track. Bob observes it fall <strong>vertically</strong>. What did Alice do?", options: ["Threw it straight down.","More information needed.","Threw it towards the front.","Threw it towards the back."], answer: 3 },
      { id: 36, categoryId: "kinematics-dynamics", chapter: "Kinematics", subtopic: "Momentum Explosion", text: "Projectile mass \\(4m\\) explodes at the top (distance \\(d\\) from launch) into \\(m\\) and \\(3m\\). Piece \\(m\\) lands at start. Where does \\(3m\\) land?", options: ["\\(\\dfrac{8d}{3}\\)","\\(\\dfrac{2d}{3}\\)","\\(3d\\)","\\(2d\\)"], answer: 0 },
      { id: 37, categoryId: "electricity", chapter: "Kinematics", subtopic: "Centre of Mass", text: "Canoe with two boys stationary. Boys throw and catch a heavy ball back and forth. No air/water resistance. <strong>Centre of mass</strong> of the system?", options: ["Moves opposite to ball.","Remains stationary.","Moves with ball.","Oscillates in SHM."], answer: 1 },
      { id: 38, categoryId: "electricity", chapter: "Kinematics", subtopic: "Impulse & Momentum", text: "Boxes \\(m\\) and \\(2m\\) start from rest, pushed by same force for same time. Ratio of <strong>final momenta</strong> (lighter : heavier)?", options: ["1 : 2","1 : 1","2 : 1","4 : 1"], answer: 1 },
      { id: 39, categoryId: "kinematics-dynamics", chapter: "Oscillations & Waves", subtopic: "Pendulum Equilibrium", text: "Pendulum (massive thread + heavy bob) in steady rightward wind. Bob heavier than thread. Which shows the correct <strong>equilibrium shape</strong>?", options: ["(A)","(B)","(C)","(D)"], answer: 3 },
      { id: 40, categoryId: "energy-momentum-rotation", chapter: "Kinematics", subtopic: "Angular Momentum", text: "Particle moves at constant velocity \\(v\\) in \\(+x\\) direction, fixed distance below origin. <strong>Angular momentum about origin?</strong>", options: ["Increases then decreases.","Non-zero constant.","Zero.","Decreases then increases."], answer: 1 },
      { id: 41, categoryId: "thermal-physics", chapter: "Rotation & Gravitation", subtopic: "SHM Asymmetric Spring", text: "Spring: constant \\(k_1\\) for extension, \\(k_2\\) for compression. Mass \\(M\\) extends by \\(x_0\\) at equilibrium. <strong>Period of oscillation?</strong>", options: ["\\(2\\pi\\sqrt{\\dfrac{M}{k_1+k_2}}\\)","\\(2\\pi\\!\\left(\\sqrt{\\dfrac{M}{k_1}}+\\sqrt{\\dfrac{M}{k_2}}\\right)\\)","\\(\\pi\\!\\left(\\sqrt{\\dfrac{M}{k_1}}+\\sqrt{\\dfrac{M}{k_2}}\\right)\\)","\\(\\pi\\!\\left(\\sqrt{\\dfrac{M}{k_1}}+\\sqrt{\\dfrac{M}{k_2}}\\right)\\dfrac{x_0}{L}\\)"], answer: 2 },
      { id: 42, categoryId: "optics-fluids", chapter: "Oscillations & Waves", subtopic: "Sound Interference", text: "Chinook helicopter (mast separation 25 m) at height 4 km flies directly towards you. Intensity maxima every 5 s. Sound: 60 Hz, 340 m/s. <strong>Horizontal speed?</strong>", options: ["90 m/s","170 m/s","225 m/s","181 m/s"], answer: 3 },
      { id: 43, categoryId: "electricity", chapter: "Electricity", subtopic: "Charged Particle E-field", text: "Alpha particle (specific charge \\(+\\eta\\)), velocity \\(+v_0\\hat{x}\\), enters region \\(x\\in[0,L]\\) where \\(V=Ex^2\\). Minimum \\(E\\) to halt it? Time \\(T\\) to traverse?", options: ["\\(E=\\dfrac{v_0\\sqrt{2\\eta}}{2\\eta},\\;T=\\dfrac{v_0\\sqrt{2\\eta}}{\\eta}\\)","\\(E=\\dfrac{v_0\\sqrt{2\\eta}}{4\\eta},\\;T=\\dfrac{v_0\\sqrt{2\\eta}}{\\eta}\\)","\\(E=\\dfrac{v_0}{2\\sqrt{2\\eta}},\\;T=\\dfrac{v_0\\sqrt{2\\eta}}{\\eta}\\)","\\(E=\\dfrac{v_0}{4\\sqrt{2\\eta}},\\;T=\\dfrac{v_0\\sqrt{2\\eta}}{\\eta}\\)"], answer: 0 },
      { id: 44, categoryId: "optics-fluids", chapter: "Electricity", subtopic: "Electric Potential Volume Charge", text: "Solid hemisphere radius \\(R\\), charge \\(Q\\) uniform throughout. <strong>Electric potential at centre of flat face?</strong>", options: ["\\(\\dfrac{Q}{4\\pi\\varepsilon_0 R}\\)","\\(\\dfrac{Q}{2\\pi\\varepsilon_0 R}\\)","\\(\\dfrac{3Q}{8\\pi\\varepsilon_0 R}\\)","\\(\\dfrac{3Q}{4\\pi\\varepsilon_0 R}\\)"], answer: 2 },
      { id: 45, categoryId: "electricity", chapter: "Electricity", subtopic: "Electrostatic Equilibrium", text: "\\(+q\\) at vertex A, \\(-q\\) at B & C of equilateral triangle (side \\(a\\)). Charge \\(p\\) at centroid. Value of \\(p\\) for <strong>zero net force on \\(+q\\)</strong>?", options: ["\\(p=+\\dfrac{\\sqrt{3}}{12}q\\)","\\(p=-\\dfrac{\\sqrt{3}}{3}q\\)","\\(p=-\\dfrac{\\sqrt{3}}{12}q\\)","\\(p=+\\dfrac{\\sqrt{3}}{3}q\\)"], answer: 0 },
      { id: 46, categoryId: "electricity", chapter: "Magnetism", subtopic: "Magnetic Force on Wire", text: "Two wire segments (solid & dotted) carry current \\(I\\) from A to B through uniform magnetic field (to the right). <strong>Magnetic forces?</strong>", options: ["Force on solid wire is greater.","Force on dotted wire is greater.","Force on both is zero.","Force on both is equal and non-zero."], answer: 3 },
      { id: 47, categoryId: "magnetism-em", chapter: "Magnetism", subtopic: "Electromagnetic Wave", text: "EM wave: \\[\\mathbf{B}=(6.0\\times10^{-6})\\cos(2.21\\times10^7z-6.63\\times10^{15}t)\\,\\hat{x}\\] At \\(x=y=z=0,\\;t=0\\), direction of \\(\\mathbf{E}\\)?", options: ["\\(+y\\)","\\(-x\\)","\\(+z\\)","\\(-y\\)"], answer: 3 },
      { id: 48, categoryId: "magnetism-em", chapter: "Thermal Physics", subtopic: "Thermal Conduction", text: "Equilateral triangular plate, vertices at \\(T_A\\), \\(T_B\\), \\(T_C\\). Steady-state <strong>temperature at centroid?</strong>", options: ["Average of 3 vertex temperatures.","Average over entire face.","Average along 3 edges.","All three are identical."], answer: 3 },
      { id: 49, categoryId: "thermal-physics", chapter: "Thermal Physics", subtopic: "Bimetallic Strip", text: "Bimetallic strip: length 30 cm, thickness 5 mm, \\(\\alpha_1=2\\times10^{-5}\\) K\\(^{-1}\\), \\(\\alpha_2=3\\times10^{-5}\\) K\\(^{-1}\\). Temperature rises 50 K. <strong>Radius of curvature?</strong>", options: ["20.0 m","16.7 m","1.80 m","10.0 m"], answer: 0 },
      { id: 50, categoryId: "magnetism-em", chapter: "Thermal Physics", subtopic: "Special Relativity", text: "Laser in glass travels slower than \\(c\\). A co-moving observer measures it even slower. What can you conclude?", options: ["Index of refraction depends on observer's motion.","No contradiction — speed of light need only be constant in same medium.","Maxwell's equations differ between frames, so light speed can change.","Special relativity contradicts itself — hence general relativity."], answer: 0 }
    ]
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function safeRead(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function safeWrite(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function normalizeCategory(category, index) {
    return {
      id: String(category.id || `category-${index + 1}`),
      name: String(category.name || `Category ${index + 1}`),
      icon: String(category.icon || "📘"),
      description: String(category.description || "")
    };
  }

  function normalizeQuestion(question, index) {
    const options = Array.isArray(question.options) ? question.options.slice(0, 5) : [];
    while (options.length < 4) options.push("");
    return {
      id: Number(question.id) || index + 1,
      categoryId: String(question.categoryId || ""),
      chapter: String(question.chapter || ""),
      subtopic: String(question.subtopic || ""),
      text: String(question.text || ""),
      options,
      answer: Number.isInteger(question.answer) ? question.answer : 0
    };
  }

  function normalizeBank(bank) {
    const categories = (Array.isArray(bank?.categories) ? bank.categories : DEFAULT_BANK.categories).map(normalizeCategory);
    const categoryIds = new Set(categories.map((category) => category.id));
    const questions = (Array.isArray(bank?.questions) ? bank.questions : DEFAULT_BANK.questions)
      .map(normalizeQuestion)
      .filter((question) => categoryIds.has(question.categoryId))
      .sort((a, b) => a.id - b.id);
    return { categories, questions };
  }

  function getQuestionBank() {
    return normalizeBank(safeRead(STORAGE_KEYS.questionBank, clone(DEFAULT_BANK)));
  }

  function saveQuestionBank(bank) {
    safeWrite(STORAGE_KEYS.questionBank, normalizeBank(bank));
  }

  function resetQuestionBank() {
    safeWrite(STORAGE_KEYS.questionBank, clone(DEFAULT_BANK));
  }

  function getTeacherIds() {
    const ids = safeRead(STORAGE_KEYS.teacherIds, DEFAULT_TEACHER_IDS);
    return Array.isArray(ids) ? ids.map((id) => String(id).trim().toUpperCase()).filter(Boolean) : clone(DEFAULT_TEACHER_IDS);
  }

  function saveTeacherIds(ids) {
    safeWrite(STORAGE_KEYS.teacherIds, Array.from(new Set(ids.map((id) => String(id).trim().toUpperCase()).filter(Boolean))));
  }

  function getStudentIds() {
    const ids = safeRead(STORAGE_KEYS.studentIds, DEFAULT_STUDENT_IDS);
    return Array.isArray(ids) ? ids.map((id) => String(id).trim().toUpperCase()).filter(Boolean) : clone(DEFAULT_STUDENT_IDS);
  }

  function saveStudentIds(ids) {
    safeWrite(STORAGE_KEYS.studentIds, Array.from(new Set(ids.map((id) => String(id).trim().toUpperCase()).filter(Boolean))));
  }

  function isTeacherId(id) {
    return getTeacherIds().includes(String(id || "").trim().toUpperCase());
  }

  function isStudentId(id) {
    return getStudentIds().includes(String(id || "").trim().toUpperCase());
  }

  function getDraftKey(studentId) {
    return `sjpo2023_draft_${String(studentId || "").trim().toUpperCase()}`;
  }

  function getDraft(studentId) {
    return safeRead(getDraftKey(studentId), {});
  }

  function saveDraft(studentId, draft) {
    safeWrite(getDraftKey(studentId), draft || {});
  }

  function clearDraft(studentId) {
    try {
      localStorage.removeItem(getDraftKey(studentId));
    } catch (error) {}
  }

  function answerIndexToLabel(idx) {
    return Number.isInteger(idx) && idx >= 0 ? String.fromCharCode(65 + idx) : "-";
  }

  function answerLabelToIndex(label) {
    if (!label || label === "-") return null;
    return label.charCodeAt(0) - 65;
  }

  function getAnswerKey(bank = getQuestionBank()) {
    const answerKey = {};
    bank.questions.forEach((question) => {
      answerKey[question.id] = question.answer;
    });
    return answerKey;
  }

  function parseAnswerString(str, bank = getQuestionBank()) {
    const answerKey = getAnswerKey(bank);
    const parsed = {};
    if (!str) return parsed;
    for (const match of str.matchAll(/Q(\d+):([A-E-])/g)) {
      const qid = Number(match[1]);
      const label = match[2];
      const selectedIndex = answerLabelToIndex(label);
      parsed[qid] = {
        label,
        selectedIndex,
        correct: selectedIndex !== null && answerKey[qid] === selectedIndex
      };
    }
    return parsed;
  }

  function formatAnswerString(answersByQuestion, bank = getQuestionBank(), questionIds = null) {
    const answerKey = getAnswerKey(bank);
    const ids = Array.isArray(questionIds) && questionIds.length
      ? questionIds.slice().sort((a, b) => a - b)
      : bank.questions.map((question) => question.id);
    return ids.map((qid) => {
      const entry = answersByQuestion[qid];
      if (!entry || entry.selectedIndex === null || entry.selectedIndex === undefined) return `Q${qid}:-`;
      const label = answerIndexToLabel(entry.selectedIndex);
      const correct = answerKey[qid] === entry.selectedIndex ? "✓" : "✗";
      return `Q${qid}:${label}(${correct})`;
    }).join(" ");
  }

  function recomputeSubmissionMetrics(answerString, bank = getQuestionBank(), questionIds = null) {
    const parsed = parseAnswerString(answerString, bank);
    const ids = Array.isArray(questionIds) && questionIds.length
      ? questionIds
      : bank.questions.map((question) => question.id);
    let attempted = 0;
    let correct = 0;
    ids.forEach((qid) => {
      const entry = parsed[qid];
      if (!entry || entry.selectedIndex === null) return;
      attempted += 1;
      if (entry.correct) correct += 1;
    });
    return {
      parsed,
      attempted,
      correct,
      total: ids.length,
      accuracy: attempted ? Math.round((correct / attempted) * 100) : 0
    };
  }

  function getSubmissions() {
    const submissions = safeRead(STORAGE_KEYS.submissions, []);
    return Array.isArray(submissions) ? submissions : [];
  }

  function saveSubmissions(submissions) {
    safeWrite(STORAGE_KEYS.submissions, submissions);
  }

  function addSubmission(submission) {
    const submissions = getSubmissions();
    submissions.push(submission);
    saveSubmissions(submissions);
  }

  function clearSubmissions() {
    saveSubmissions([]);
  }

  function getCategoryQuestionIds(categoryId, bank = getQuestionBank()) {
    return bank.questions.filter((question) => question.categoryId === categoryId).map((question) => question.id);
  }

  function slugifyCategoryName(name) {
    return String(name || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "new-category";
  }

  function nextQuestionId(bank = getQuestionBank()) {
    return bank.questions.reduce((maxId, question) => Math.max(maxId, question.id), 0) + 1;
  }

  function exportQuestionBank() {
    return JSON.stringify(getQuestionBank(), null, 2);
  }

  function importQuestionBank(json) {
    const parsed = JSON.parse(json);
    saveQuestionBank(parsed);
    return getQuestionBank();
  }

  function escapeCsv(value) {
    return `"${String(value ?? "").replace(/"/g, '""')}"`;
  }

  return {
    STORAGE_KEYS,
    DEFAULT_BANK: clone(DEFAULT_BANK),
    getQuestionBank,
    saveQuestionBank,
    resetQuestionBank,
    getTeacherIds,
    saveTeacherIds,
    getStudentIds,
    saveStudentIds,
    isTeacherId,
    isStudentId,
    getDraft,
    saveDraft,
    clearDraft,
    answerIndexToLabel,
    answerLabelToIndex,
    parseAnswerString,
    formatAnswerString,
    recomputeSubmissionMetrics,
    getSubmissions,
    saveSubmissions,
    addSubmission,
    clearSubmissions,
    getCategoryQuestionIds,
    slugifyCategoryName,
    nextQuestionId,
    exportQuestionBank,
    importQuestionBank,
    escapeCsv
  };
})();
