window.SJPO_SHARED = (() => {
  const TOTAL_QUESTIONS = 50;

  const ANSWER_KEY = {
    1: 4, 2: 1, 3: 3, 4: 0, 5: 3,
    6: 0, 7: 2, 8: 1, 9: 1, 10: 3,
    11: 3, 12: 2, 13: 1, 14: 1, 15: 1,
    16: 3, 17: 2, 18: 0, 19: 3, 20: 0,
    21: 1, 22: 2, 23: 3, 24: 0, 25: 2,
    26: 1, 27: 2, 28: 0, 29: 2, 30: 2,
    31: 0, 32: 3, 33: 1, 34: 0, 35: 3,
    36: 0, 37: 1, 38: 1, 39: 3, 40: 1,
    41: 2, 42: 3, 43: 0, 44: 2, 45: 0,
    46: 3, 47: 3, 48: 3, 49: 0, 50: 0
  };

  const QUESTION_META = [
    { id: 1, ch: "Kinematics", preview: "Four objects are dropped from rest at different heights. Air resistance is negligible." },
    { id: 2, ch: "Kinematics", preview: "Two runners take part in a marathon. Runner 1 has a linearly increasing speed." },
    { id: 3, ch: "Kinematics", preview: "A truck moves at 40 km/h and a car at 60 km/h." },
    { id: 4, ch: "Kinematics", preview: "The area under an acceleration-time graph over a fixed interval is 10 m/s." },
    { id: 5, ch: "Kinematics", preview: "An object moves in a vertical circle from the bottom with initial speed 4.0 m/s." },
    { id: 6, ch: "Dynamics & Forces", preview: "On Mars, a space gun accelerates a 3000 kg satellite from rest to 9000 m/s." },
    { id: 7, ch: "Dynamics & Forces", preview: "A 70 kg man stands on a scale in an elevator." },
    { id: 8, ch: "Dynamics & Forces", preview: "Three identical 5 kg boxes on a frictionless surface are pulled by 30 N." },
    { id: 9, ch: "Dynamics & Forces", preview: "A 1.5 kg ball hits the ground at 1.2 m/s, rebounds at 0.5 m/s." },
    { id: 10, ch: "Electricity", preview: "A negatively charged particle moves at constant speed from x = -6.0 m to x = -3.0 m." },
    { id: 11, ch: "Dynamics & Forces", preview: "A 50 kg block accelerates horizontally at 2 m/s², pulled by a rope at 30°." },
    { id: 12, ch: "Rotation & Gravitation", preview: "A wheel starts at omega = 5 rad/s with constant angular acceleration 4 rad/s²." },
    { id: 13, ch: "Rotation & Gravitation", preview: "A geostationary satellite orbits at height H above Earth." },
    { id: 14, ch: "Rotation & Gravitation", preview: "A solid cylinder rolls without slipping at 10 m/s." },
    { id: 15, ch: "Rotation & Gravitation", preview: "A child on a free-spinning merry-go-round moves towards the centre." },
    { id: 16, ch: "Fluids & Optics", preview: "A sealed cup of water has a striped straw through its side." },
    { id: 17, ch: "Fluids & Optics", preview: "Water flows in a horizontal pipe at 4 m/s and 200 000 Pa at A." },
    { id: 18, ch: "Oscillations & Waves", preview: "What changes when a transverse wave passes from one medium to another?" },
    { id: 19, ch: "Oscillations & Waves", preview: "Sound passes through two materials before reaching a microphone." },
    { id: 20, ch: "Physical Optics", preview: "Two identical linear polarising filters are crossed at 90° in natural light." },
    { id: 21, ch: "Oscillations & Waves", preview: "A wave is given by y(t)=3 cos 2pi t + 3sqrt2 cos 3pi t + sqrt2 cos 4pi t." },
    { id: 22, ch: "Electricity", preview: "Plates 1, 2, 4 are charged plastic; plate 3 is a neutral copper plate." },
    { id: 23, ch: "Electricity", preview: "Neutral conducting block with cavities J, K, L, M and charges inside." },
    { id: 24, ch: "Electricity", preview: "Particle 1 is -q at (+a,0) and particle 2 is at (0,+a)." },
    { id: 25, ch: "Electricity", preview: "Charge Q sits at the centre and 6 corners of a regular hexagon." },
    { id: 26, ch: "Magnetism", preview: "Loops A and B are near a wire with current to the right." },
    { id: 27, ch: "Electricity", preview: "A decreasing magnetic field induces an EMF in a square loop with 3 bulbs." },
    { id: 28, ch: "Electricity", preview: "A 400-turn square coil sits in a magnetic field that drops from 0.50 T to 0." },
    { id: 29, ch: "Electricity", preview: "Five identical bulbs and a battery are connected with switch S closed." },
    { id: 30, ch: "Energy & Momentum", preview: "A 100 g lead bullet at 300 m/s stops in ice at 0°C." },
    { id: 31, ch: "Thermal Physics", preview: "Aluminium has specific heat 0.9 kJ/kg·K and is heated by a 200 W heater." },
    { id: 32, ch: "Thermal Physics", preview: "A scuba diver blows a bubble of radius R at depth 15 m." },
    { id: 33, ch: "Thermal Physics", preview: "Which statement about absolute zero is correct?" },
    { id: 34, ch: "Thermal Physics", preview: "A bicycle tyre at 25°C has gauge pressure 150 kPa." },
    { id: 35, ch: "Kinematics", preview: "Alice on a train throws a package to Bob beside the track." },
    { id: 36, ch: "Kinematics", preview: "A projectile of mass 4m explodes at the top into m and 3m." },
    { id: 37, ch: "Kinematics", preview: "A canoe with two boys is stationary while they throw a heavy ball." },
    { id: 38, ch: "Kinematics", preview: "Boxes m and 2m are pushed by the same force for the same time." },
    { id: 39, ch: "Oscillations & Waves", preview: "A pendulum with a heavy bob hangs in a steady rightward wind." },
    { id: 40, ch: "Kinematics", preview: "A particle moves at constant velocity in the +x direction below the origin." },
    { id: 41, ch: "Rotation & Gravitation", preview: "A spring has constant k1 in extension and k2 in compression." },
    { id: 42, ch: "Oscillations & Waves", preview: "A Chinook helicopter approaches while intensity maxima occur every 5 s." },
    { id: 43, ch: "Electricity", preview: "An alpha particle enters a region where V = Ex² over x in [0, L]." },
    { id: 44, ch: "Electricity", preview: "A solid hemisphere of radius R has charge Q uniformly distributed." },
    { id: 45, ch: "Electricity", preview: "+q is at A and -q at B and C of an equilateral triangle." },
    { id: 46, ch: "Magnetism", preview: "Two wire segments carry current from A to B through a uniform magnetic field." },
    { id: 47, ch: "Magnetism", preview: "An electromagnetic wave has magnetic field B = B0 cos(kz - wt) x-hat." },
    { id: 48, ch: "Thermal Physics", preview: "An equilateral triangular plate has fixed temperatures at its vertices." },
    { id: 49, ch: "Thermal Physics", preview: "A bimetallic strip of length 30 cm and thickness 5 mm is heated by 50 K." },
    { id: 50, ch: "Thermal Physics", preview: "A laser in glass travels slower than c, and a co-moving observer measures it slower." }
  ];

  function answerIndexToLabel(idx) {
    return Number.isInteger(idx) && idx >= 0 ? String.fromCharCode(65 + idx) : "-";
  }

  function answerLabelToIndex(label) {
    if (!label || label === "-") return null;
    return label.charCodeAt(0) - 65;
  }

  function parseAnswerString(str) {
    const result = {};
    if (!str) return result;
    for (const match of str.matchAll(/Q(\d+):([A-E-])(?:\((✓|✗|-)\))?/g)) {
      const qid = Number(match[1]);
      const label = match[2];
      const selectedIndex = answerLabelToIndex(label);
      result[qid] = {
        label,
        selectedIndex,
        correct: selectedIndex !== null && ANSWER_KEY[qid] === selectedIndex
      };
    }
    return result;
  }

  function formatAnswerString(answersByQuestion) {
    const parts = [];
    for (let qid = 1; qid <= TOTAL_QUESTIONS; qid += 1) {
      const entry = answersByQuestion[qid];
      if (!entry || entry.selectedIndex === null || entry.selectedIndex === undefined) {
        parts.push(`Q${qid}:-`);
        continue;
      }
      const label = answerIndexToLabel(entry.selectedIndex);
      const correct = ANSWER_KEY[qid] === entry.selectedIndex ? "✓" : "✗";
      parts.push(`Q${qid}:${label}(${correct})`);
    }
    return parts.join(" ");
  }

  function recomputeSubmissionMetrics(str) {
    const parsed = parseAnswerString(str);
    let attempted = 0;
    let correct = 0;
    for (let qid = 1; qid <= TOTAL_QUESTIONS; qid += 1) {
      const entry = parsed[qid];
      if (!entry || entry.selectedIndex === null) continue;
      attempted += 1;
      if (entry.correct) correct += 1;
    }
    return {
      parsed,
      attempted,
      correct,
      total: TOTAL_QUESTIONS,
      accuracy: attempted ? Math.round((correct / attempted) * 100) : 0
    };
  }

  function escapeCsv(value) {
    const stringValue = String(value ?? "");
    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  return {
    TOTAL_QUESTIONS,
    ANSWER_KEY,
    QUESTION_META,
    answerIndexToLabel,
    answerLabelToIndex,
    parseAnswerString,
    formatAnswerString,
    recomputeSubmissionMetrics,
    escapeCsv
  };
})();
