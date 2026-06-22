import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  Easing,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

const { fontFamily: INTER } = loadInter();
const { fontFamily: MONO } = loadMono();

// Brand tokens — mirrored from styles/tokens.css (same product as the site).
const C = {
  void: "#080a0a",
  surface: "#101413",
  elevated: "#181d1b",
  border: "#222826",
  borderStrong: "#323a37",
  muted: "#3b443f",
  text: "#f5f7f5",
  text2: "#9ba29d",
  text3: "#7a827c",
  accent: "#ee4628",
  accentDeep: "#c23a20",
  accentDim: "#2a1109",
  accentBorder: "#5c2417",
  paper: "#faf6f0",
  ink: "#1c1a17",
  success: "#4ade80",
  warn: "#f5c451",
};

const CL = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };
const EASE = Easing.bezier(0.16, 1, 0.3, 1);
const fade = (f: number, s: number, d = 14) => interpolate(f, [s, s + d], [0, 1], CL);
const rise = (f: number, s: number, d = 18, amt = 18) =>
  interpolate(f, [s, s + d], [amt, 0], { ...CL, easing: EASE });
const seg = (f: number, a: number, b: number, from: number, to: number) =>
  interpolate(f, [a, b], [from, to], { ...CL, easing: EASE });
const typed = (str: string, f: number, s: number, d: number) =>
  str.slice(0, Math.floor(interpolate(f, [s, s + d], [0, str.length], CL)));
const hexRGB = (hex: string) => {
  const h = hex.replace("#", "");
  return `${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)}`;
};

const Backdrop: React.FC<{ glowStrength?: number }> = ({ glowStrength = 1 }) => {
  const f = useCurrentFrame();
  const shift = (f * 0.28) % 60;
  const glow = interpolate(Math.sin(f / 55), [-1, 1], [0.05, 0.12]) * glowStrength;
  const rgb = hexRGB(C.accent);
  return (
    <AbsoluteFill style={{ backgroundColor: C.void }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          backgroundPosition: `${shift}px ${shift}px`,
          opacity: 0.3,
        }}
      />
      <AbsoluteFill
        style={{ background: `radial-gradient(circle at 50% 40%, rgba(${rgb},${glow}) 0%, transparent 58%)` }}
      />
      <AbsoluteFill
        style={{ background: "radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,0,0,0.62) 100%)" }}
      />
    </AbsoluteFill>
  );
};

// Skill Me mark (paper squircle, ink+vermilion bars).
const Mark: React.FC<{ size?: number; draw?: number }> = ({ size = 120, draw = 1 }) => {
  const barW = (full: number) => Math.max(12, full * interpolate(draw, [0, 1], [0, 1], CL));
  return (
    <svg width={size} height={size} viewBox="0 0 120 120">
      <rect x="10" y="10" width="100" height="100" rx="27" fill={C.paper} />
      <rect x="34" y="33" width={barW(42)} height="12" rx="6" fill={C.ink} />
      <rect x="34" y="54" width={barW(83)} height="12" rx="6" fill={C.accent} />
      <rect x="34" y="75" width={barW(33)} height="12" rx="6" fill={C.ink} />
    </svg>
  );
};

// Neutral functional-fitness glyph (a barbell). NO CrossFit logo — nominative,
// non-affiliated. When `showBrandLogo` is enabled (only after documented
// authorization), the parent can swap this for the licensed mark.
const BarbellGlyph: React.FC<{ size?: number; color?: string }> = ({ size = 120, color = C.accent }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <rect x="14" y="40" width="92" height="6" rx="3" transform="rotate(45 60 60)" fill={color} />
    <g fill={color}>
      <rect x="22" y="22" width="12" height="30" rx="3" transform="rotate(45 28 37)" />
      <rect x="30" y="14" width="12" height="30" rx="3" transform="rotate(45 36 29)" />
      <rect x="86" y="68" width="12" height="30" rx="3" transform="rotate(45 92 83)" />
      <rect x="78" y="76" width="12" height="30" rx="3" transform="rotate(45 84 91)" />
    </g>
  </svg>
);

interface DemoProps {
  showBrandLogo?: boolean;
}

// ===========================================================================
// SCENE 1 — TITLE
// ===========================================================================
const Title: React.FC<DemoProps> = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 20, stiffness: 85 } });
  const o = interpolate(s, [0, 1], [0, 1], CL);
  const exit = interpolate(f, [80, 92], [1, 0], CL);
  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <Backdrop />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center", opacity: o }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 22, marginBottom: 34, alignItems: "center" }}>
            <Mark size={104} draw={interpolate(f, [4, 28], [0, 1], { ...CL, easing: EASE })} />
            <span style={{ color: C.muted, fontSize: 46, fontFamily: INTER }}>×</span>
            <BarbellGlyph size={104} />
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 17,
              letterSpacing: "0.32em",
              color: C.accent,
              textTransform: "uppercase",
              opacity: fade(f, 24, 16),
            }}
          >
            A Skill Me pack
          </div>
          <div
            style={{
              fontFamily: INTER,
              fontWeight: 700,
              fontSize: 82,
              lineHeight: 1.03,
              color: C.text,
              marginTop: 20,
              letterSpacing: "-0.02em",
              opacity: fade(f, 32, 16),
              transform: `translateY(${rise(f, 32, 18, 16)}px)`,
            }}
          >
            Functional Fitness
            <br />
            Coaching Pack
          </div>
          <div
            style={{
              fontFamily: INTER,
              fontSize: 24,
              color: C.text2,
              marginTop: 22,
              opacity: fade(f, 44, 16),
            }}
          >
            27 coaching skills, built on the method.
          </div>
          {/* CrossFit® methodology badge — descriptive, affiliate-licensed use */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginTop: 28,
              padding: "12px 22px",
              borderRadius: 999,
              border: `1px solid ${C.accentBorder}`,
              backgroundColor: C.accentDim,
              opacity: fade(f, 46, 16),
              transform: `translateY(${rise(f, 46, 16, 12)}px)`,
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: C.accent }} />
            <span style={{ fontFamily: INTER, fontWeight: 600, fontSize: 21, color: C.text, letterSpacing: "0.01em" }}>
              Applies the{" "}
              <span style={{ color: C.accent }}>
                CrossFit<sup style={{ fontSize: "0.55em", verticalAlign: "super" }}>®</sup>
              </span>{" "}
              methodology
            </span>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ===========================================================================
// SCENE 2 — THE MECHANISM (describe a task → the right CrossFit skill)
// Real seeded skill names + honest one-line reasons.
// ===========================================================================
type Rec = { name: string; why: string; safety?: boolean };
type Cycle = { task: string; tag: string; recs: Rec[] };

const CYCLES: Cycle[] = [
  {
    task: "write me a workout for tomorrow",
    tag: "Programming",
    recs: [
      { name: "CrossFit Workout Designer", why: "one complete workout, designed from the stimulus" },
      { name: "CrossFit Stimulus and Scaling Coach", why: "RX / intermediate / beginner paths" },
    ],
  },
  {
    task: "my shoulder hurts during pull-ups",
    tag: "Safety first",
    recs: [
      { name: "Safety & referral check", why: "screen red flags before programming", safety: true },
      { name: "CrossFit Injury-Aware Workout Adapter", why: "adapt around it — never diagnose" },
    ],
  },
];

const ChatCycle: React.FC<{ cycle: Cycle; index: number; total: number }> = ({ cycle, index, total }) => {
  const f = useCurrentFrame();
  const { task, recs, tag } = cycle;
  const panelIn = fade(f, 0, 14);
  const panelY = rise(f, 0, 16, 22);
  const typeEnd = 6 + task.length * 1.05;
  const caret = f > 4 && f < typeEnd + 6;
  const matching = f > typeEnd + 4 && f < typeEnd + 24;
  const cardStart = typeEnd + 24;
  const addAt = cardStart + recs.length * 16 + 20;
  const exit = interpolate(f, [150, 156], [1, 0], CL);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <Backdrop glowStrength={0.85} />
      <div style={{ position: "absolute", left: 150, top: 320, width: 320, opacity: fade(f, 6, 16), transform: `translateX(${seg(f, 6, 24, -16, 0)}px)` }}>
        <div style={{ fontFamily: MONO, fontSize: 15, color: C.accent, letterSpacing: "0.24em" }}>ONE CHAT</div>
        <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 50, lineHeight: 1.05, color: C.text, marginTop: 18, letterSpacing: "-0.02em" }}>
          Describe
          <br />
          the task.
        </div>
        <div style={{ fontFamily: INTER, fontSize: 21, color: C.text2, marginTop: 20, lineHeight: 1.45 }}>
          Claude routes to the narrowest CrossFit skill — and refers what isn't coaching.
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 30 }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{ width: i === index ? 28 : 8, height: 8, borderRadius: 4, backgroundColor: i === index ? C.accent : i < index ? C.muted : C.border }} />
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 560,
          top: 250,
          width: 1180,
          minHeight: 520,
          opacity: panelIn,
          transform: `translateY(${panelY}px)`,
          backgroundColor: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: 18,
          boxShadow: `0 30px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px ${C.accentBorder}33`,
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 26px", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, backgroundColor: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 16, color: C.paper }}>S</div>
            <span style={{ fontFamily: INTER, fontWeight: 600, fontSize: 22, color: C.text }}>Skill Me</span>
            <span style={{ fontFamily: MONO, fontSize: 13, color: C.text3 }}>in claude.ai</span>
          </div>
          <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.2em", color: C.accent, textTransform: "uppercase" }}>{tag}</span>
        </div>
        <div style={{ padding: "26px 30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, backgroundColor: C.void, border: `1px solid ${C.border}`, borderRadius: 12, padding: "18px 22px" }}>
            <span style={{ fontFamily: MONO, fontSize: 22, color: C.accent }}>›</span>
            <span style={{ fontFamily: INTER, fontSize: 28, color: C.text }}>
              {typed(task, f, 6, task.length * 1.0)}
              {caret && <span style={{ display: "inline-block", width: 3, height: 28, marginLeft: 3, transform: "translateY(4px)", backgroundColor: C.accent, opacity: f % 16 < 8 ? 1 : 0 }} />}
            </span>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: matching ? C.accent : C.text3, marginTop: 22, marginBottom: 16, height: 16, opacity: f > typeEnd + 2 ? 1 : 0 }}>
            {matching ? "Routing to the right skill…" : f >= cardStart ? "Recommended" : ""}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {recs.map((rec, i) => {
              const at = cardStart + i * 16;
              const o = fade(f, at, 12);
              const x = seg(f, at, at + 14, 26, 0);
              const isTop = i === 0;
              const added = isTop && f > addAt;
              const dot = rec.safety ? C.warn : C.accent;
              return (
                <div key={rec.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, backgroundColor: C.elevated, border: `1px solid ${added ? C.accentBorder : C.border}`, borderRadius: 12, padding: "16px 20px", opacity: o, transform: `translateX(${x}px)` }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: dot }} />
                      <span style={{ fontFamily: INTER, fontWeight: 600, fontSize: 23, color: C.text }}>{rec.name}</span>
                    </div>
                    <span style={{ fontFamily: MONO, fontSize: 15, color: C.text3, paddingLeft: 23 }}>{rec.why}</span>
                  </div>
                  <span style={{ fontFamily: INTER, fontWeight: 600, fontSize: 16, borderRadius: 10, padding: "10px 18px", whiteSpace: "nowrap", ...(added ? { backgroundColor: C.accent, color: C.paper } : { border: `1px solid ${C.borderStrong}`, color: C.text2 }) }}>
                    {rec.safety ? "Check" : added ? "✓ Added" : "Add"}
                  </span>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 22, opacity: fade(f, addAt + 12, 12) }}>
            <span style={{ color: C.success, fontFamily: MONO, fontSize: 16 }}>✓</span>
            <span style={{ fontFamily: INTER, fontSize: 18, color: C.text2 }}>Installed and live in every future conversation.</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===========================================================================
// SCENE 3 — WHAT'S INSIDE (honest: 27 skills across the coaching workflow)
// ===========================================================================
const GROUPS = [
  "Workout & program design",
  "Stimulus-preserving scaling",
  "Movement progression & faults",
  "Assessment & benchmarking",
  "Class plans & floor logistics",
  "Foundations & onboarding",
  "Population adaptation",
  "Nutrition habits",
  "Injury-aware adaptation",
  "Competition prep & strategy",
  "Rules & standards (versioned)",
  "Credential & coach review",
];

const Inside: React.FC = () => {
  const f = useCurrentFrame();
  const exit = interpolate(f, [156, 162], [1, 0], CL);
  const count = Math.round(interpolate(f, [16, 50], [0, 27], { ...CL, easing: EASE }));
  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <Backdrop />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center", width: 1640 }}>
          <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 58, color: C.text, letterSpacing: "-0.02em", opacity: fade(f, 2, 14), transform: `translateY(${rise(f, 2, 16, 14)}px)` }}>
            One pack. The whole coaching workflow.
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 90, marginTop: 44 }}>
            <div style={{ textAlign: "center", opacity: fade(f, 14, 12) }}>
              <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 92, color: C.text, lineHeight: 1 }}>{count}</div>
              <div style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.16em", textTransform: "uppercase", color: C.text2, marginTop: 14 }}>Coaching skills</div>
            </div>
            <div style={{ textAlign: "center", opacity: fade(f, 22, 12) }}>
              <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 92, color: C.accent, lineHeight: 1 }}>1</div>
              <div style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.16em", textTransform: "uppercase", color: C.text2, marginTop: 14 }}>install_pack</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginTop: 50, maxWidth: 1500, marginLeft: "auto", marginRight: "auto" }}>
            {GROUPS.map((g, i) => {
              const at = 40 + i * 4;
              return (
                <div key={g} style={{ display: "flex", alignItems: "center", gap: 10, backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 999, padding: "12px 20px", opacity: fade(f, at, 10), transform: `scale(${interpolate(f, [at, at + 12], [0.85, 1], { ...CL, easing: EASE })})` }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: C.accent }} />
                  <span style={{ fontFamily: INTER, fontSize: 20, color: C.text2 }}>{g}</span>
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ===========================================================================
// SCENE 4 — COACHING, RESPONSIBLY (safety + scope + versioned rules)
// ===========================================================================
const PRINCIPLES = [
  { t: "Coaching-level, not medical", b: "No diagnosis, rehab, or medication. Refers red flags — chest pain, rhabdo signs, more." },
  { t: "Stimulus is the unit", b: "Scaling preserves the intended adaptation, not just 'make it easier.'" },
  { t: "Versioned competition rules", b: "Never invents standards; uses only confirmed, in-season sources." },
];

const Responsibly: React.FC = () => {
  const f = useCurrentFrame();
  const exit = interpolate(f, [108, 114], [1, 0], CL);
  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <Backdrop glowStrength={0.8} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: MONO, fontSize: 15, letterSpacing: "0.26em", textTransform: "uppercase", color: C.accent, opacity: fade(f, 2, 14) }}>Built to coach responsibly</div>
          <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 56, color: C.text, letterSpacing: "-0.02em", marginTop: 18, opacity: fade(f, 6, 14), transform: `translateY(${rise(f, 6, 16, 14)}px)` }}>
            Specific, honest, in scope.
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 26, marginTop: 56 }}>
            {PRINCIPLES.map((p, i) => {
              const at = 22 + i * 14;
              return (
                <div key={p.t} style={{ width: 440, textAlign: "left", backgroundColor: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: "30px 32px", opacity: fade(f, at, 14), transform: `translateY(${rise(f, at, 18, 24)}px)` }}>
                  <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 26, color: C.text }}>{p.t}</div>
                  <div style={{ fontFamily: INTER, fontSize: 19, lineHeight: 1.5, color: C.text2, marginTop: 12 }}>{p.b}</div>
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ===========================================================================
// SCENE 5 — OUTRO / CTA + non-affiliation
// ===========================================================================
const Outro: React.FC<DemoProps> = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 22, stiffness: 90 } });
  const o = interpolate(s, [0, 1], [0, 1], CL);
  const fadeOut = interpolate(f, [96, 110], [1, 0], CL);
  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <Backdrop />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ textAlign: "center", opacity: o }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
            <BarbellGlyph size={88} />
          </div>
          <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 70, lineHeight: 1.06, color: C.text, letterSpacing: "-0.025em", maxWidth: 1300, opacity: fade(f, 8, 16) }}>
            Coach every session
            <br />
            with one install.
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, marginTop: 44, opacity: fade(f, 26, 14) }}>
            <div style={{ fontFamily: MONO, fontSize: 22, color: C.paper, backgroundColor: C.accent, borderRadius: 12, padding: "14px 26px" }}>install_pack crossfit-coaching</div>
            <div style={{ fontFamily: MONO, fontSize: 24, color: C.text2, letterSpacing: "0.04em" }}>skillme.dev</div>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: C.text3, marginTop: 38, opacity: fade(f, 36, 14), maxWidth: 1200, lineHeight: 1.7 }}>
            Applies the CrossFit® methodology · by a licensed affiliate · not endorsed or certified by CrossFit, LLC
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ===========================================================================
// ROOT TIMELINE — 30fps
// ===========================================================================
const TITLE = 92;
const CYCLE = 156;
const INSIDE = 162;
const RESP = 114;
const OUTRO = 110;

const A = TITLE; // 80
const B = A + CYCLE; // 236
const D = B + CYCLE; // 392
const E = D + INSIDE; // 554
const G = E + RESP; // 668
export const CROSSFIT_PACK_DURATION = G + OUTRO; // 778

export const CrossFitPackDemo: React.FC<DemoProps> = ({ showBrandLogo = false }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: C.void }}>
      <Sequence from={0} durationInFrames={TITLE}>
        <Title showBrandLogo={showBrandLogo} />
      </Sequence>
      <Sequence from={A} durationInFrames={CYCLE}>
        <ChatCycle cycle={CYCLES[0]} index={0} total={CYCLES.length} />
      </Sequence>
      <Sequence from={B} durationInFrames={CYCLE}>
        <ChatCycle cycle={CYCLES[1]} index={1} total={CYCLES.length} />
      </Sequence>
      <Sequence from={D} durationInFrames={INSIDE}>
        <Inside />
      </Sequence>
      <Sequence from={E} durationInFrames={RESP}>
        <Responsibly />
      </Sequence>
      <Sequence from={G} durationInFrames={OUTRO}>
        <Outro showBrandLogo={showBrandLogo} />
      </Sequence>
    </AbsoluteFill>
  );
};
