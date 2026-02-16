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
        text: " of Slate\u2019s API surface. The other 78% is dead weight we route around.",
        marks: [],
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
    _key: "p04b",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p04b.0",
        text: "The integration layer bridging PTE and Slate has grown to ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p04b.1",
        text: "493KB",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p04b.2",
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
        text: "PTE understands Portable Text deeply. It knows the difference between annotations and decorators, what should happen when you type at the end of a link, how inline objects behave at selection boundaries. The schema drives everything: decorators only work if defined, paste filters to allowed types, structure validation happens on every operation.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p06b",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p06b.0",
        text: "On top of that foundation: markdown shortcuts that let you type ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p06b.1",
        text: "# ",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p06b.2",
        text: " for a heading or ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p06b.3",
        text: "**text**",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p06b.4",
        text: " for bold without leaving rich text mode. A typography plugin with 22 auto-replacement rules for smart quotes, arrows, and fractions. An emoji picker triggered by ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p06b.5",
        text: ":",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p06b.6",
        text: " that autocompletes as you type. Paste a URL with text selected and it wraps the selection in a link. Five bidirectional format converters handle Portable Text, HTML, Markdown, plain text, and JSON.",
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
        text: "The Behavior API gives us composable control over every user action. The collaborative editing pipeline handles real-time multi-user synchronization. Over a thousand test cases, written in Gherkin syntax using racejar, encode our opinions about how every edge case should resolve.",
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
        text: "At some point, the wrapper became the product.",
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
    _key: "p09",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p09.0",
        text: "The cost of straddling two systems shows up in specific ways.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p10",
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
        _key: "p10.0",
        text: "Portable Text",
        marks: ["lnk3"],
      },
      {
        _type: "span",
        _key: "p10.1",
        text: " isn\u2019t the source of truth in its own editor. Internally, PTE thinks in Slate and translates on every operation: Portable Text in, Slate for processing, Portable Text back out. We maintain two representations of the same document at all times, kept in sync on every keystroke, every paste, every collaborative edit. That sync alone accounts for ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p10.2",
        text: "76KB",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p10.3",
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
    _key: "p11",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p11.0",
        text: "Even with all that testing, bugs keep tracing back to this layer. Most of them wouldn\u2019t exist without the dual model.",
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
        text: "The worst one caused data loss in collaborative editing. Two editors, same document. Stale state from the sync silently overwrote one editor\u2019s live changes. Bold formatting, gone. No error, no warning. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p12.1",
        text: "Users lost work because two internal models briefly disagreed about the truth, and the wrong one won.",
        marks: ["highlight"],
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
        text: "PTE has outgrown the architecture. The integration layer was the right approach when PTE was a thin wrapper around Slate. It\u2019s the wrong approach now that PTE is a full editor maintaining a compatibility bridge to a framework it\u2019s already outgrown.",
        marks: [],
      },
    ],
  },

  // === When things go wrong ===
  {
    _type: "block",
    _key: "h2c",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2c.0",
        text: "When things go wrong",
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
        text: "Slate throws hard on invalid states. A content editor working in production sees ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p14.1",
        text: "\"Cannot find descendant at path [0,2,1]\"",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p14.2",
        text: " and has no idea what happened. The error is accurate. It\u2019s also useless.",
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
        text: "This is the right behavior for a framework. Slate can\u2019t know what your application considers recoverable, so it fails fast and lets you decide. But PTE isn\u2019t a consumer of Slate anymore. We know exactly what\u2019s recoverable and what isn\u2019t. We know which invalid states are data-loss risks and which ones are cosmetic. We just can\u2019t act on that knowledge because the error happens inside Slate, before PTE gets a chance to intervene.",
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
        text: "Owning the code changes this. Errors get reported in terms that make sense to the people who actually see them. Invalid states that aren\u2019t dangerous get recovered instead of crashing the editor. The error boundary moves from ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p16.1",
        text: "\"something went wrong in the framework\"",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "p16.2",
        text: " to ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p16.3",
        text: "\"here\u2019s what happened and here\u2019s what we did about it.\"",
        marks: ["em"],
      },
    ],
  },

  // === One model ===
  {
    _type: "block",
    _key: "h2d",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2d.0",
        text: "One model",
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
        text: "We could live with this indefinitely if PTE\u2019s needs were static. They\u2019re not.",
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
        text: "Container support (tables, callouts, blockquotes, code blocks) is PTE\u2019s next major capability. The integration layer assumes flat structure throughout, hardcoded for depth-2 (blocks and their children, nothing deeper). Adding containers means rewriting the translation layer to handle arbitrary nesting, or removing it entirely. Same files, similar effort. One path makes the integration layer more sophisticated. The other eliminates it.",
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
        text: "We\u2019re taking the second path.",
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
        text: "We\u2019re copying Slate\u2019s source into the PTE monorepo, stripping the 78% we don\u2019t use, and making Portable Text the source of truth. One model instead of two. The converters disappear and model-drift bugs become structurally impossible. Nothing changes for consumers. Everything changes underneath.",
        marks: [],
      },
    ],
  },

  {
    _type: "factBox",
    _key: "fb4",
    number: "Nothing changes for consumers.",
    label: "Everything changes underneath.",
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
        text: "Containers stop being blocked by architecture. And the class of bugs that caused data loss in collaborative editing can\u2019t happen anymore. One model. Nothing to drift.",
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
        text: "The remaining simplifications happen as code is touched, not as a scheduled project. Slate stores state in WeakMaps because as a framework it can\u2019t put data directly on the editor instance without risking collisions with consumer code. PTE owns the editor. That indirection goes away, and state becomes directly inspectable in devtools. Components merge when we need more control over rendering. Normalization gets unified the next time a bug comes up. None of it is urgent. It just happens as part of ongoing PTE development.",
        marks: [],
      },
    ],
  },

  // === Slate got us here ===
  {
    _type: "block",
    _key: "h2e",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2e.0",
        text: "Slate got us here",
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
        text: "That\u2019s still true and still matters.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p24",
    style: "normal",
    markDefs: [
      {
        _key: "lnk4",
        _type: "link",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable",
      },
    ],
    children: [
      {
        _type: "span",
        _key: "p24.0",
        text: "When PTE needed a foundation for rich text editing, Slate was the right call. It gave us battle-tested ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p24.1",
        text: "contenteditable",
        marks: ["code", "lnk4"],
      },
      {
        _type: "span",
        _key: "p24.2",
        text: " handling, solid DOM reconciliation, and a real selection model. Years of edge cases across every browser, every OS, every input method. Slate handled the hard, unglamorous work of making text editing actually function, and PTE built Portable Text semantics on top of it.",
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
        text: "We didn\u2019t build all this to escape Slate. We built it because Slate gave us somewhere to stand while we figured out what PTE needed to be.",
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
        text: "Slate gave us the ground floor. PTE built the rest.",
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
        text: "There\u2019s a version of this argument that\u2019s purely negative: the translation layer is expensive, the bugs are frustrating, we need to escape. But that misses something.",
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
        text: "We didn\u2019t outgrow Slate by accident. We outgrew it by building something good.",
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
        text: "PTE has become a seriously capable editor. Not because we were trying to replace Slate, but because we kept solving problems Slate couldn\u2019t solve for us. Collaborative editing that actually works. Predictable typing behavior. A composable event system that gives us control over every user action.",
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
        text: "Slate can\u2019t offer what PTE needs next. Not because it\u2019s poorly built, but because it\u2019s a framework. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p30.1",
        text: "Frameworks stay general. Products get specific.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p30.2",
        text: " PTE got specific a long time ago, and it\u2019s better for it.",
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
        text: "Slate\u2019s development has slowed, and the features PTE needs (containers, a Portable Text-native data model, multi-callback rendering) are things a general-purpose framework won\u2019t provide. We\u2019ve been maintaining our own editor for a while now. We just haven\u2019t made it official.",
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
    _key: "p32",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p32.0",
        text: "PTE started as a Slate wrapper. It\u2019s not one anymore. We maintain 493KB of integration code to bridge between our system and a framework we\u2019ve mostly outgrown. That bridge produces bugs that can\u2019t exist without the dual model, and forces every engineer who touches PTE to debug across multiple systems at once.",
        marks: [],
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
        text: "We\u2019re not leaving Slate because it\u2019s bad. We\u2019re leaving because we\u2019ve already left.",
        marks: ["highlight"],
      },
    ],
  },
  {
    _type: "block",
    _key: "p34",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p34.0",
        text: "The question isn\u2019t whether to own the editor. It\u2019s whether to keep pretending we don\u2019t.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p35",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p35.0",
        text: "It\u2019s time to make it official.",
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
