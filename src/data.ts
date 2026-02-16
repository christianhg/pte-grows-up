import type { PortableTextBlock } from "@portabletext/types";

// Custom block type
export interface FactBox {
  _type: "factBox";
  _key: string;
  number: string;
  label: string;
}

export type PTBlock = PortableTextBlock | FactBox;

export const PT: PTBlock[] = [
  {
    _type: "block",
    _key: "title",
    style: "h1",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "title.0",
        text: "How Portable Text Editor Outgrew Its Framework",
        marks: [],
      },
    ],
  },

  // --- Opening ---
  {
    _type: "block",
    _key: "p01",
    style: "normal",
    markDefs: [
      {
        _key: "lnk1",
        _type: "link",
        href: "https://github.com/ianstormtaylor/slate",
      },
    ],
    children: [
      {
        _type: "span",
        _key: "p01.0",
        text: "Slate",
        marks: ["lnk1"],
      },
      {
        _type: "span",
        _key: "p01.1",
        text: " got us here. That\u2019s worth saying upfront, and meaning it.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p02",
    style: "normal",
    markDefs: [
      {
        _key: "lnk2",
        _type: "link",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable",
      },
      {
        _key: "lnk3",
        _type: "link",
        href: "https://github.com/portabletext/editor",
      },
    ],
    children: [
      {
        _type: "span",
        _key: "p02.0",
        text: "When ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p02.1",
        text: "PTE",
        marks: ["lnk3"],
      },
      {
        _type: "span",
        _key: "p02.2",
        text: " needed a foundation for rich text editing, Slate was the right call. It gave us battle-tested ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p02.3",
        text: "contenteditable",
        marks: ["code", "lnk2"],
      },
      {
        _type: "span",
        _key: "p02.4",
        text: " handling, solid DOM reconciliation, and a real selection model. That\u2019s deep browser plumbing that takes years to get right. Slate handled the hard, unglamorous work of making text editing actually work across browsers, and PTE built Portable Text semantics on top of it.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p03",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p03.0",
        text: "That architecture served us well. But over the past few years, something has shifted. We haven\u2019t just been building ",
        marks: [],
      },
      { _type: "span", _key: "p03.1", text: "on", marks: ["em"] },
      {
        _type: "span",
        _key: "p03.2",
        text: " Slate. We\u2019ve been building ",
        marks: [],
      },
      { _type: "span", _key: "p03.3", text: "around", marks: ["em"] },
      {
        _type: "span",
        _key: "p03.4",
        text: " it. The gap between what Slate provides and what PTE needs has grown wide enough that we\u2019re now maintaining two systems where we should have one.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p04",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p04.0",
        text: "This isn\u2019t a story about Slate failing. It\u2019s a story about PTE succeeding to the point where ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p04.1",
        text: "the wrapper has outgrown the thing it wraps",
        marks: ["highlight"],
      },
      { _type: "span", _key: "p04.2", text: ".", marks: [] },
    ],
  },

  // === The shape of the problem ===
  {
    _type: "block",
    _key: "h2a",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2a.0",
        text: "The shape of the problem",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p05",
    style: "normal",
    markDefs: [
      {
        _key: "lnk4",
        _type: "link",
        href: "https://www.sanity.io/docs/presenting-block-text",
      },
    ],
    children: [
      {
        _type: "span",
        _key: "p05.0",
        text: "Portable Text",
        marks: ["lnk4"],
      },
      {
        _type: "span",
        _key: "p05.1",
        text: " isn\u2019t the source of truth in its own editor. Internally, PTE thinks in Slate and translates on every operation: Portable Text in, Slate for processing, Portable Text back out. That translation layer has grown to ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p05.2",
        text: "493KB of TypeScript",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p05.3",
        text: ". Slate itself is 513KB of source code. We\u2019ve built a system nearly the size of the framework it sits on top of.",
        marks: [],
      },
    ],
  },

  {
    _type: "factBox",
    _key: "fb1",
    number: "493KB \u2192 513KB",
    label: "PTE\u2019s integration layer is nearly the size of Slate itself",
  },

  {
    _type: "block",
    _key: "p06",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p06.0",
        text: "PTE uses about ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p06.1",
        text: "22% of Slate\u2019s API surface",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p06.2",
        text: ". The other 78% is dead weight. We\u2019ve replaced Slate\u2019s history system, its transform pipeline, its event handling, and most of its editor methods. We built the Behavior API, our own event system that intercepts Slate\u2019s editor methods and re-routes every user action through PTE\u2019s own state machines. We didn\u2019t extend Slate\u2019s event handling. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p06.3",
        text: "We replaced it.",
        marks: ["strong"],
      },
    ],
  },

  {
    _type: "factBox",
    _key: "fb2",
    number: "22%",
    label: "of Slate\u2019s API surface is actually used by PTE \u2014 78% is dead weight",
  },

  {
    _type: "block",
    _key: "p07",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p07.0",
        text: "What we actually use Slate for, at this point, is DOM reconciliation and input handling. Everything else we\u2019ve already rebuilt.",
        marks: [],
      },
    ],
  },

  // === The dual-model tax ===
  {
    _type: "block",
    _key: "h2b",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2b.0",
        text: "The dual-model tax",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p08",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p08.0",
        text: "The core of the problem is the dual-model sync. PTE maintains two representations of the same document at all times: Slate\u2019s tree and a Portable Text mirror, kept in sync on every keystroke, every paste, every collaborative edit. That sync alone accounts for ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p08.1",
        text: "76KB of dedicated code",
        marks: ["strong"],
      },
      { _type: "span", _key: "p08.2", text: ".", marks: [] },
    ],
  },

  {
    _type: "factBox",
    _key: "fb3",
    number: "76KB",
    label: "of code dedicated solely to keeping two models of the same document in sync",
  },

  {
    _type: "block",
    _key: "p09",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p09.0",
        text: "The largest single test file exists solely to verify the translation doesn\u2019t drift. Even with all that testing, bugs keep tracing back to this layer. Most of them would be structurally impossible without the dual model.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p10",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p10.0",
        text: "The worst one caused ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p10.1",
        text: "data loss in collaborative editing.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p10.2",
        text: " Two editors, same document. Stale state from the dual-model sync silently overwrote one editor\u2019s live changes. Bold formatting, gone. No error, no warning. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p10.3",
        text: "Users lost work because two internal models briefly disagreed about the truth, and the wrong one won.",
        marks: ["highlight"],
      },
    ],
  },
  {
    _type: "block",
    _key: "p11",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p11.0",
        text: "A typing bug could live in the mutation handling, the operation translation, or Slate\u2019s own text insertion. We end up holding multiple systems in our heads to trace one issue, and the debugging experience makes each one expensive.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p12",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p12.0",
        text: "There\u2019s no paying this down incrementally. It\u2019s architectural friction baked into the boundary itself.",
        marks: [],
      },
    ],
  },

  // === Containers force the issue ===
  {
    _type: "block",
    _key: "h2c",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2c.0",
        text: "Containers force the issue",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p13",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p13.0",
        text: "We could live with this friction indefinitely if PTE\u2019s needs were static. They\u2019re not.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p14",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p14.0",
        text: "Container support (tables, callouts, blockquotes, code blocks) is PTE\u2019s next major capability. Slate\u2019s tree model handles nesting fine, but PTE\u2019s integration layer assumes a flat structure throughout. The render callbacks, the dual-model sync, the normalization rules are all built for two levels. Most of the integration layer is hardcoded for depth-2 (blocks and their children, nothing deeper). Adding containers means rewriting all of that to handle arbitrary depth, piling ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p14.1",
        text: "more",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "p14.2",
        text: " integration code on top of a boundary that\u2019s already where most bugs have lived.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p15",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p15.0",
        text: "We ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p15.1",
        text: "can",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "p15.2",
        text: " build containers without internalizing Slate. It\u2019s not technically blocked. But it means rewriting the translation layer to handle arbitrary depth instead of just two levels. That\u2019s a comparable amount of work to removing the translation layer entirely. Either way we\u2019re touching the same code. The difference is the outcome: one path makes the integration layer more sophisticated, the other eliminates it.",
        marks: [],
      },
    ],
  },

  // === The plan ===
  {
    _type: "block",
    _key: "h2d",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2d.0",
        text: "The plan",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p16",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p16.0",
        text: "This isn\u2019t a rewrite. It\u2019s a recognition of where we already are, followed by a methodical simplification.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p17",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p17.0",
        text: "Zero public API impact.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p17.1",
        text: " PTE exports zero Slate types today. No consumer ever imports from ",
        marks: [],
      },
      { _type: "span", _key: "p17.2", text: "slate", marks: ["code"] },
      { _type: "span", _key: "p17.3", text: " or ", marks: [] },
      {
        _type: "span",
        _key: "p17.4",
        text: "slate-react",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p17.5",
        text: ". This is purely internal.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p18",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p18.0",
        text: "Step 1: Copy Slate in.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p18.1",
        text: " Copy ",
        marks: [],
      },
      { _type: "span", _key: "p18.2", text: "slate", marks: ["code"] },
      { _type: "span", _key: "p18.3", text: ", ", marks: [] },
      { _type: "span", _key: "p18.4", text: "slate-dom", marks: ["code"] },
      { _type: "span", _key: "p18.5", text: ", and ", marks: [] },
      { _type: "span", _key: "p18.6", text: "slate-react", marks: ["code"] },
      {
        _type: "span",
        _key: "p18.7",
        text: " into the PTE monorepo as internal packages. Remove the external npm dependencies. All existing tests pass. We get debuggable source and fix a downstream dependency issue.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p19",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p19.0",
        text: "Step 2: Strip the 78% we don\u2019t use.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p19.1",
        text: " Delete the unused API surface. Post-strip, the vendored Slate code is less than half its original size.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p20",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p20.0",
        text: "Step 3: Make Portable Text the source of truth.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p20.1",
        text: " This is the real architectural move. Kill the dual-model sync so there\u2019s one data model instead of two. The converters disappear and model-drift bugs can\u2019t happen anymore. This work isn\u2019t additional cost on top of containers. Containers need the depth-2 code rewritten either way. We\u2019re either teaching the translation layer to handle arbitrary depth, or removing it. Same files, similar effort.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p21",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p21.0",
        text: "Step 4: Simplify as we go (ongoing).",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p21.1",
        text: " The remaining work happens as code is touched, not as a scheduled project. The two Editable components merge when we need more control over rendering or event handling. The normalization pass gets unified the next time a normalization bug comes up. Slate\u2019s transformation engine gets replaced as we rewrite operations. None of it is urgent, and none of it needs scheduling.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p22",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p22.0",
        text: "Steps 1 and 2 deliver immediate value. Step 3 is where the real gains compound. Step 4 happens naturally. The total codebase ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p22.1",
        text: "shrinks",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "p22.2",
        text: ", not grows. We\u2019re collapsing two systems into something smaller and more coherent than either.",
        marks: [],
      },
    ],
  },

  // === What changes ===
  {
    _type: "block",
    _key: "h2e",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2e.0",
        text: "What changes",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p23",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p23.0",
        text: "The most immediate win is debugging. Today we trace through our own PTE code but often end up in Slate code that\u2019s harder to change and debug. Even after multiple years of navigating Slate internals, it\u2019s still a major indirection. After internalizing, it\u2019s PTE, React, and the DOM. The translation layer\u2019s code paths collapse, the per-keystroke overhead goes away, and we can set breakpoints in the ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p23.1",
        text: "contenteditable",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p23.2",
        text: " code directly.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p24",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p24.0",
        text: "Containers stop being blocked by architecture. The hardcoded depth-2 limitation goes away, and we can focus on what containers should ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p24.1",
        text: "do",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "p24.2",
        text: " instead of fighting the integration layer to make them possible.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p25",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p25.0",
        text: "Error handling changes fundamentally. Right now Slate throws hard on invalid states, and we get stack traces with internal Slate paths surfacing as garbled errors in Sanity Studio. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p25.1",
        text: "\"Cannot find descendant at path [0,2,1]\"",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p25.2",
        text: " means nothing to someone editing content. Owning the code means we can recover instead of crash and report errors that actually make sense.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p26",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p26.0",
        text: "And the class of bugs that caused data loss in collaborative editing can\u2019t happen anymore. There\u2019s one model. There\u2019s nothing to drift.",
        marks: [],
      },
    ],
  },

  // === PTE has earned this ===
  {
    _type: "block",
    _key: "h2f",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2f.0",
        text: "PTE has earned this",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p27",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p27.0",
        text: "There\u2019s a version of this argument that\u2019s purely negative: the translation layer is expensive, we need to escape. But that misses something. PTE has become a seriously good editor in its own right.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p28",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p28.0",
        text: "Hundreds of test cases. Predictable typing behavior out of the box, the kind of consistency a framework can never offer because frameworks can\u2019t have opinions. A composable Behavior API that lets us define exactly how every user action should work. A collaborative editing pipeline that handles real-time multi-user editing with conflict resolution.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p29",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p29.0",
        text: "Slate can\u2019t offer these things. Not because it\u2019s poorly built, but because it\u2019s a framework. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p29.1",
        text: "Frameworks stay general. Products get specific.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p29.2",
        text: " PTE got specific a long time ago, and it\u2019s better for it.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p30",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p30.0",
        text: "We\u2019re not walking away from an active partnership, either. Slate\u2019s development has slowed, and the features PTE needs (containers, a Portable Text-native data model, multi-callback rendering) are things a general-purpose framework won\u2019t provide. We\u2019ve been maintaining our own editor for a while now. We just haven\u2019t made it official.",
        marks: [],
      },
    ],
  },

  // === The bottom line ===
  {
    _type: "block",
    _key: "h2g",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2g.0",
        text: "The bottom line",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p31",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p31.0",
        text: "PTE has already built a parallel editor runtime. We maintain 493KB of integration code to bridge between our system and a 513KB framework we\u2019ve mostly outgrown. That bridge produces bugs that are structurally impossible without the dual model, and forces every engineer who touches PTE to debug across three systems at once.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p32",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p32.0",
        text: "We\u2019re not leaving Slate because it\u2019s bad. We\u2019re leaving because we\u2019ve already left.",
        marks: ["highlight"],
      },
    ],
  },
  {
    _type: "block",
    _key: "p33",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p33.0",
        text: "The question isn\u2019t whether to own the editor. It\u2019s whether to keep pretending we don\u2019t.",
        marks: [],
      },
    ],
  },
];

export const blockKeys = PT.map((b) => b._key);

/** Type guard for FactBox custom blocks */
function isFactBox(block: PTBlock): block is FactBox {
  return block._type === "factBox";
}

/** Get a short text summary of a block for screen reader announcements */
export function blockText(key: string): string {
  const block = PT.find((b) => b._key === key);
  if (!block) return key;
  if (isFactBox(block)) return `${block.number} \u2014 ${block.label}`;
  if ("children" in block && Array.isArray(block.children)) {
    const text = block.children
      .filter((c): c is { _type: "span"; text: string } => "text" in c)
      .map((c) => c.text)
      .join("");
    // Truncate long blocks
    return text.length > 80 ? text.slice(0, 80) + "\u2026" : text;
  }
  return key;
}
