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
        text: "How the Portable Text Editor Outgrew Its Framework",
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
        text: "At some point we stopped building on ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p01.1",
        text: "Slate",
        marks: ["lnk1"],
      },
      {
        _type: "span",
        _key: "p01.2",
        text: " and started building around it.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p02",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p02.0",
        text: "We replaced the undo system because Slate\u2019s doesn\u2019t handle collaborative editing. Then we needed more control over how user actions flow through the editor, so we built the Behavior API, a composable event system that intercepts every user action and routes it through PTE\u2019s own state machines. We didn\u2019t extend Slate\u2019s event handling. We replaced it.",
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
        text: "Then transforms, then marks. Eventually, most of the editor methods.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p04",
    style: "normal",
    markDefs: [
      {
        _key: "lnk2",
        _type: "link",
        href: "https://github.com/portabletext/editor",
      },
    ],
    children: [
      {
        _type: "span",
        _key: "p04.0",
        text: "Today ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p04.1",
        text: "PTE",
        marks: ["lnk2"],
      },
      {
        _type: "span",
        _key: "p04.2",
        text: " uses about ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p04.3",
        text: "22%",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p04.4",
        text: " of Slate\u2019s API surface. The other 78% is dead weight we route around. The integration layer bridging PTE and Slate has grown to ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p04.5",
        text: "493KB",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p04.6",
        text: " of TypeScript. Slate itself is 513KB. We\u2019ve built a system nearly the size of the framework it sits on top of.",
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
    _type: "factBox",
    _key: "fb2",
    number: "22%",
    label: "of Slate\u2019s API surface is actually used by PTE \u2014 78% is dead weight",
  },

  {
    _type: "block",
    _key: "p05",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p05.0",
        text: "The wrapper has outgrown the thing it wraps.",
        marks: ["highlight"],
      },
    ],
  },

  // === What we built ===
  {
    _type: "block",
    _key: "h2a",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2a.0",
        text: "What we built",
        marks: [],
      },
    ],
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
        text: "Hundreds of test cases. Predictable typing behavior out of the box, the kind of consistency that comes from having opinions about how typing should work. A collaborative editing pipeline that handles real-time multi-user editing with conflict resolution. The Behavior API gives us composable control over every user action. PTE has become a seriously good editor in its own right.",
        marks: [],
      },
    ],
  },

  // === Two models, one document ===
  {
    _type: "block",
    _key: "h2b",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2b.0",
        text: "Two models, one document",
        marks: [],
      },
    ],
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
        text: "The cost of straddling two systems shows up in specific ways.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p08",
    style: "normal",
    markDefs: [
      {
        _key: "lnk3",
        _type: "link",
        href: "https://www.sanity.io/docs/presenting-block-text",
      },
    ],
    children: [
      {
        _type: "span",
        _key: "p08.0",
        text: "Portable Text",
        marks: ["lnk3"],
      },
      {
        _type: "span",
        _key: "p08.1",
        text: " isn\u2019t the source of truth in its own editor. Internally, PTE thinks in Slate and translates on every operation: Portable Text in, Slate for processing, Portable Text back out. We maintain two representations of the same document at all times, kept in sync on every keystroke, every paste, every collaborative edit. That sync alone accounts for ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p08.2",
        text: "76KB",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p08.3",
        text: " of dedicated code. The largest single test file exists solely to verify the translation doesn\u2019t drift.",
        marks: [],
      },
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
        text: "Even with all that testing, bugs keep tracing back to this layer. Most of them wouldn\u2019t exist without the dual model.",
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
        text: "The worst one caused data loss in collaborative editing. Two editors, same document. Stale state from the sync silently overwrote one editor\u2019s live changes. Bold formatting, gone. No error, no warning. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p10.1",
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
        text: "PTE has outgrown the architecture. The integration layer was the right approach when PTE was a thin wrapper around Slate. It\u2019s the wrong approach now that PTE is a full editor maintaining a compatibility bridge to a framework it barely uses.",
        marks: [],
      },
    ],
  },

  // === One model ===
  {
    _type: "block",
    _key: "h2c",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2c.0",
        text: "One model",
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
        text: "Container support (tables, callouts, blockquotes, code blocks) is PTE\u2019s next major capability. The integration layer assumes flat structure throughout, hardcoded for depth-2 (blocks and their children, nothing deeper). Adding containers means rewriting the translation layer to handle arbitrary nesting, or removing it entirely. Same files, similar effort. One path makes the integration layer more sophisticated. The other eliminates it.",
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
        text: "We\u2019re taking the second path.",
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
        text: "We\u2019re copying Slate\u2019s source into the PTE monorepo, stripping the 78% we don\u2019t use, and making ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p14.1",
        text: "Portable Text",
        marks: [],
      },
      {
        _type: "span",
        _key: "p14.2",
        text: " the source of truth. One model instead of two. The converters disappear and model-drift bugs become structurally impossible. Nothing changes for consumers. Everything changes underneath.",
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
        text: "Debugging collapses from three systems to PTE, React, and the DOM. Containers stop being blocked by architecture. And the class of bugs that caused data loss in collaborative editing can\u2019t happen anymore. One model. Nothing to drift.",
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
        text: "The remaining simplifications happen as code is touched, not as a scheduled project. Components merge when we need more control over rendering. Normalization gets unified the next time a bug comes up. None of it is urgent. It just happens as part of ongoing PTE development.",
        marks: [],
      },
    ],
  },

  // === Slate got us here ===
  {
    _type: "block",
    _key: "h2d",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2d.0",
        text: "Slate got us here",
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
        text: "That\u2019s still true and still matters. Slate gave us battle-tested ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p17.1",
        text: "contenteditable",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p17.2",
        text: " handling, solid DOM reconciliation, a real selection model. Deep browser plumbing that takes years to get right. PTE built everything else on top of that foundation.",
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
        text: "But foundations don\u2019t stay the same size as the buildings that grow on them.",
        marks: [],
      },
    ],
  },

  // === PTE has earned this ===
  {
    _type: "block",
    _key: "h2e",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2e.0",
        text: "PTE has earned this",
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
        text: "Slate can\u2019t offer what PTE needs next. Not because it\u2019s poorly built, but because it\u2019s a framework. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p19.1",
        text: "Frameworks stay general. Products get specific.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p19.2",
        text: " PTE got specific a long time ago, and it\u2019s better for it.",
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
        text: "Slate\u2019s development has slowed, and the features PTE needs (containers, a Portable Text-native data model, multi-callback rendering) are things a general-purpose framework won\u2019t provide. We\u2019ve been maintaining our own editor for a while now. We just haven\u2019t made it official.",
        marks: [],
      },
    ],
  },

  // === The bottom line ===
  {
    _type: "block",
    _key: "h2f",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2f.0",
        text: "The bottom line",
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
        text: "PTE started as a Slate wrapper. It\u2019s not one anymore. We maintain 493KB of integration code to bridge between our system and a framework we\u2019ve mostly outgrown. That bridge produces bugs that can\u2019t exist without the dual model, and forces every engineer who touches PTE to debug across multiple systems at once.",
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
        text: "We\u2019re not leaving Slate because it\u2019s bad. We\u2019re leaving because we\u2019ve already left.",
        marks: ["highlight"],
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
