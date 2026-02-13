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
        text: "It\u2019s Time to Own the Editor",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "subtitle",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "subtitle.0",
        text: "Why PTE should internalize Slate, and why the timing is now",
        marks: ["strong"],
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
        _key: "lnk4",
        _type: "link",
        href: "https://github.com/portabletext/editor",
      },
    ],
    children: [
      {
        _type: "span",
        _key: "p02.0a",
        text: "When ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p02.0b",
        text: "PTE",
        marks: ["lnk4"],
      },
      {
        _type: "span",
        _key: "p02.0c",
        text: " needed a foundation for rich text editing, Slate was the right call. It gave us battle-tested ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p02.1",
        text: "contenteditable",
        marks: ["code", "lnk2"],
      },
      {
        _type: "span",
        _key: "p02.2",
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

  // === The numbers tell the story ===
  {
    _type: "block",
    _key: "h2a",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2a.0",
        text: "The numbers tell the story",
        marks: [],
      },
    ],
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
        text: "Here\u2019s the fact that reframes everything: ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p05.1",
        text: "PTE\u2019s integration layer, the code that bridges between Portable Text and Slate, is 493KB of TypeScript across 136 files. Slate itself is 513KB of source code.",
        marks: ["strong"],
      },
    ],
  },

  {
    _type: "factBox",
    _key: "fb1",
    number: "493KB \u2192 513KB",
    label: "PTE\u2019s integration layer is nearly 1:1 with Slate itself",
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
        text: "We\u2019ve built a system nearly the size of the framework it sits on top of. That 493KB spans behavior routing, dual-model sync, plugin bridge layers, and the translation overhead between them. A lot of it reflects PTE\u2019s own sophistication: a richer event system, predictable typing, collaborative editing. But roughly 175KB exists purely because two data models need to stay in sync, and the boundary shapes everything around it.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p07",
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
        _key: "p07.0",
        text: "Portable Text",
        marks: ["lnk3"],
      },
      { _type: "span", _key: "p07.1b", text: " has blocks with ", marks: [] },
      { _type: "span", _key: "p07.1", text: "_type", marks: ["code"] },
      { _type: "span", _key: "p07.2", text: ", ", marks: [] },
      { _type: "span", _key: "p07.3", text: "_key", marks: ["code"] },
      {
        _type: "span",
        _key: "p07.4",
        text: ", spans, marks, and annotations. Slate has a recursive tree of Elements and Text nodes with a completely different shape. PTE maintains ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p07.5",
        text: "both representations simultaneously",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "p07.6",
        text: ": Slate\u2019s tree in ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p07.7",
        text: "editor.children",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p07.8",
        text: " and a PT-native mirror in ",
        marks: [],
      },
      { _type: "span", _key: "p07.9", text: "editor.value", marks: ["code"] },
      {
        _type: "span",
        _key: "p07.10",
        text: ", kept in sync on every keystroke, every paste, every collaborative edit. That dual-model sync alone accounts for ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p07.11",
        text: "76KB of dedicated code",
        marks: ["strong"],
      },
      { _type: "span", _key: "p07.12", text: ".", marks: [] },
    ],
  },

  {
    _type: "factBox",
    _key: "fb5",
    number: "76KB",
    label: "of code dedicated solely to keeping two models of the same document in sync",
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
        text: "And it\u2019s not just size. PTE uses roughly ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p08.1",
        text: "22% of Slate\u2019s API",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p08.2",
        text: ". The other 78% is dead weight we carry but never call. We override 18 Slate methods, run 8 plugins in a carefully ordered chain, and maintain 6 XState actors alongside Slate\u2019s own state. We\u2019ve replaced Slate\u2019s history system, its transform pipeline, its event handling, and most of its editor methods.",
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
    _key: "p08b",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p08b.0",
        text: "The most telling example is the Behavior API, PTE\u2019s own event system. 150KB across 30 files. It intercepts 13 of Slate\u2019s editor methods (",
        marks: [],
      },
      { _type: "span", _key: "p08b.1", text: "delete", marks: ["code"] },
      { _type: "span", _key: "p08b.2", text: ", ", marks: [] },
      {
        _type: "span",
        _key: "p08b.3",
        text: "deleteBackward",
        marks: ["code"],
      },
      { _type: "span", _key: "p08b.4", text: ", ", marks: [] },
      { _type: "span", _key: "p08b.5", text: "insertBreak", marks: ["code"] },
      { _type: "span", _key: "p08b.6", text: ", ", marks: [] },
      { _type: "span", _key: "p08b.7", text: "insertText", marks: ["code"] },
      { _type: "span", _key: "p08b.8", text: ", ", marks: [] },
      { _type: "span", _key: "p08b.9", text: "redo", marks: ["code"] },
      { _type: "span", _key: "p08b.10", text: ", ", marks: [] },
      { _type: "span", _key: "p08b.11", text: "select", marks: ["code"] },
      {
        _type: "span",
        _key: "p08b.12",
        text: ", and others) and re-routes every user action through PTE\u2019s own XState machines. We didn\u2019t extend Slate\u2019s event handling. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p08b.13",
        text: "We replaced it.",
        marks: ["strong"],
      },
    ],
  },

  {
    _type: "block",
    _key: "p08c",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p08c.0",
        text: "Even the way Slate stores state reflects the mismatch. As a framework, Slate can\u2019t put state directly on the ",
        marks: [],
      },
      { _type: "span", _key: "p08c.1", text: "editor", marks: ["code"] },
      {
        _type: "span",
        _key: "p08c.2",
        text: " object. It doesn\u2019t own it, and writing properties there might collide with consumer code. So it uses WeakMaps, which are slower than direct property access and notoriously hard to debug (you can\u2019t inspect WeakMap contents in devtools). ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p08c.3",
        text: "That\u2019s a reasonable trade-off for a framework. But PTE is the product. We own the editor object.",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "p08c.4",
        text: " We don\u2019t need the indirection. After the fork, state goes directly on the instance where it belongs.",
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
        text: "What we actually use Slate for, at this point, is DOM reconciliation and input handling. Everything else we\u2019ve already rebuilt: the event system, the state model, schema enforcement, render dispatch, the mutation pipeline.",
        marks: [],
      },
    ],
  },

  // === The cost isn't theoretical ===
  {
    _type: "block",
    _key: "h2b",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2b.0",
        text: "The cost isn\u2019t theoretical",
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
        text: "You might look at this and think: okay, it\u2019s a big translation layer, but it works. Why change what works?",
        marks: [],
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
        text: "Because it doesn\u2019t just work. It works ",
        marks: [],
      },
      { _type: "span", _key: "p11.1", text: "and", marks: ["em"] },
      {
        _type: "span",
        _key: "p11.2",
        text: " it breaks, in ways that are expensive to debug and uniquely hard to fix.",
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
        text: "In recent weeks, ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p12.1",
        text: "six bugs traced directly to the translation layer",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p12.2",
        text: ". Not PTE logic, not Slate logic, but the ",
        marks: [],
      },
      { _type: "span", _key: "p12.3", text: "boundary", marks: ["em"] },
      { _type: "span", _key: "p12.4", text: " between them:", marks: [] },
    ],
  },

  {
    _type: "factBox",
    _key: "fb3",
    number: "6 bugs in 6 weeks",
    label: "traced directly to the translation layer \u2014 ~1 per week, ongoing",
  },

  {
    _type: "block",
    _key: "b1",
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [
      { _type: "span", _key: "b1.0", text: "A field named ", marks: [] },
      { _type: "span", _key: "b1.1", text: "text", marks: ["code"] },
      {
        _type: "span",
        _key: "b1.2",
        text: " on a block object caused the dual-model sync to misidentify nodes and silently drop updates.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "b2",
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "b2.0",
        text: "The patch translation emitted operations that treated ",
        marks: [],
      },
      { _type: "span", _key: "b2.1", text: "null", marks: ["code"] },
      {
        _type: "span",
        _key: "b2.2",
        text: ' as "present," causing insert failures for users.',
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "b3",
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "b3.0",
        text: "Duplicate ",
        marks: [],
      },
      { _type: "span", _key: "b3.1", text: "_key", marks: ["code"] },
      {
        _type: "span",
        _key: "b3.2",
        text: " values caused the wrong child to appear selected.",
        marks: [],
      },
    ],
  },

  {
    _type: "block",
    _key: "dataloss",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "dataloss.0",
        text: "And the worst one: ",
        marks: [],
      },
      {
        _type: "span",
        _key: "dataloss.1",
        text: "data loss in collaborative editing.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "dataloss.2",
        text: " Two editors working on the same document. Editor A\u2019s deferred normalization patches \u2014 stale state from the dual-model sync \u2014 silently overwrote Editor B\u2019s live changes. Bold formatting, gone. No error, no warning. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "dataloss.3",
        text: "Users lost work because two internal models briefly disagreed about the truth, and the wrong one won.",
        marks: ["highlight"],
      },
    ],
  },

  {
    _type: "block",
    _key: "b5",
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "b5.0",
        text: "Two separate sync machine failures when block types or children changed during external sync.",
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
        text: "Five of those six bugs would be ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p13.1",
        text: "structurally impossible",
        marks: ["em"],
      },
      {
        _type: "span",
        _key: "p13.2",
        text: " without the translation layer. They exist because we maintain two models and translate between them. That\u2019s roughly one translation-layer bug per week \u2014 an ongoing tax on every engineer who touches PTE.",
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
        text: "And the debugging experience compounds the cost. A single typing bug could live in the MutationActor\u2019s debouncing, the patches plugin\u2019s operation translation, Slate\u2019s ",
        marks: [],
      },
      { _type: "span", _key: "p14.1", text: "insertText", marks: ["code"] },
      {
        _type: "span",
        _key: "p14.2",
        text: " handling, or somewhere in the interaction between all three. You have to hold three systems in your head at once. The translation layer creates a combinatorial bug surface: 8 operation types \u00d7 2 sync directions \u00d7 depth branching \u00d7 type handling = roughly 96 code paths. Our single largest test file is 50KB, and it exists solely to verify that the dual-model sync doesn\u2019t drift.",
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
        text: "Every keystroke passes through ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p15.1",
        text: "40\u201350 function calls",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p15.2",
        text: " from translation overhead alone. Structural operations like Enter or Delete hit 100\u2013250 calls as each Slate operation passes through all 8 plugin layers. The ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p15.3",
        text: "buildIndexMaps",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p15.4",
        text: " function runs on every structural operation with O(N) document-size scaling \u2014 it gets slower as documents grow.",
        marks: [],
      },
    ],
  },

  {
    _type: "factBox",
    _key: "fb4",
    number: "40\u201350",
    label: "extra function calls per keystroke from translation overhead alone",
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
        text: "You can\u2019t pay this down incrementally. It\u2019s architectural friction baked into the boundary itself.",
        marks: [],
      },
    ],
  },

  // === Containers ===
  {
    _type: "block",
    _key: "h2c",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2c.0",
        text: "Containers are the forcing function",
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
        text: "We could live with this friction indefinitely if PTE\u2019s needs were static. They\u2019re not.",
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
        text: "Container support \u2014 tables, callouts, blockquotes with editable children \u2014 is the next major capability PTE needs. And containers multiply every friction point in the translation layer.",
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
        text: "The patch translation file (",
        marks: [],
      },
      {
        _type: "span",
        _key: "p19.1",
        text: "operation-to-patches.ts",
        marks: ["code"],
      },
      { _type: "span", _key: "p19.2", text: ", 17KB) ", marks: [] },
      {
        _type: "span",
        _key: "p19.3",
        text: "hardcodes a maximum depth of 2",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p19.4",
        text: ". Every function explicitly checks ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p19.5",
        text: "operation.path.length === 1",
        marks: ["code"],
      },
      { _type: "span", _key: "p19.6", text: " (block-level) vs ", marks: [] },
      { _type: "span", _key: "p19.7", text: "=== 2", marks: ["code"] },
      {
        _type: "span",
        _key: "p19.8",
        text: " (child-level). Containers need arbitrary depth. Every function in that file would need to be rewritten.",
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
        text: "The render pipeline needs a new branch. Normalization rules double. The ",
        marks: [],
      },
      { _type: "span", _key: "p20.1", text: "isVoid", marks: ["code"] },
      {
        _type: "span",
        _key: "p20.2",
        text: " override, today a simple boolean check, must become context-dependent. Selection conversion gets deeper. The 30KB block insertion file gets worse.",
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
        text: "We could build containers on top of the current architecture. But we\u2019d be adding a third layer of complexity to a system that\u2019s already struggling under two. The translation layer doesn\u2019t just make containers harder. It makes them fragile in ways that will cost us for years.",
        marks: [],
      },
    ],
  },

  // === Error philosophy ===
  {
    _type: "block",
    _key: "h2d",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2d.0",
        text: "Slate\u2019s error philosophy doesn\u2019t match ours",
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
        text: "There\u2019s a subtler issue worth naming. Slate\u2019s error handling philosophy is to ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p22.1",
        text: "throw hard and throw often",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p22.2",
        text: ". Invalid states, unexpected node types, missing paths: Slate crashes by design, treating these as programmer errors that should surface loudly.",
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
        text: "That\u2019s a reasonable philosophy for a framework. It\u2019s a terrible philosophy for a production CMS.",
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
        text: "When Slate throws in production, users see garbled stack traces with internal paths and Slate-specific terminology. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p24.1",
        text: "Cannot find a descendant at path [0,2,1]",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p24.2",
        text: " means something to a Slate developer. It means nothing to someone editing content in Sanity Studio.",
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
        text: "Owning the editor code lets us take a different approach: ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p25.1",
        text: "recover instead of crash",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p25.2",
        text: ". Detect invalid states and normalize them. Surface errors in terms of block keys, schema types, and field names that PTE developers actually understand. Render a corrupted block as a fallback instead of crashing the entire editor. Set error boundaries at the block level, not the operation level.",
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
        text: "Every Slate crash in production is a broken editor in someone\u2019s CMS. We can do better.",
        marks: [],
      },
    ],
  },

  // === Maintenance reality ===
  {
    _type: "block",
    _key: "h2e",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2e.0",
        text: "The maintenance reality",
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
        text: "One concern that comes up naturally: aren\u2019t we walking away from an active open-source project? Wouldn\u2019t we lose upstream improvements?",
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
        text: "The honest answer is that Slate doesn\u2019t have a dedicated maintainer driving its roadmap. There\u2019s no coordinated architectural direction. Contributions come in, some get merged, but nobody\u2019s steering the project toward a vision. Changes come from downstream users fixing things they need fixed, mostly drive-by contributions.",
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
        text: "Recent changes have been bug fixes and browser compatibility patches: removing the immer dependency, Shadow DOM fixes for Android, composition event handling. These are real improvements, and we\u2019d want to cherry-pick them. But there\u2019s no stream of innovations to miss. The features PTE needs (container support, a PT-native data model, multi-callback rendering) are things Slate will never provide. They\u2019re specific to Portable Text.",
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
        text: "We\u2019re not walking away from an active partnership. We\u2019re acknowledging that we\u2019ve been maintaining our own editor for a while now. We just haven\u2019t made it official.",
        marks: [],
      },
    ],
  },

  // === The plan ===
  {
    _type: "block",
    _key: "h2f",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2f.0",
        text: "The plan: vendor first, then unify",
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
        text: "This isn\u2019t a rewrite. It\u2019s a recognition of where we already are, followed by a methodical simplification.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p31b",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p31b.0",
        text: "First, the thing that matters most: ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p31b.1",
        text: "zero public API impact.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p31b.2",
        text: " PTE exports zero Slate types today. No consumer ever imports from ",
        marks: [],
      },
      { _type: "span", _key: "p31b.3", text: "slate", marks: ["code"] },
      { _type: "span", _key: "p31b.4", text: " or ", marks: [] },
      {
        _type: "span",
        _key: "p31b.5",
        text: "slate-react",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p31b.6",
        text: ". This is purely an internal restructuring. The public surface doesn\u2019t change at all.",
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
        text: "Step 1: Vendor the source.",
        marks: ["strong"],
      },
      { _type: "span", _key: "p32.1", text: " Copy ", marks: [] },
      { _type: "span", _key: "p32.2", text: "slate", marks: ["code"] },
      { _type: "span", _key: "p32.3", text: ", ", marks: [] },
      { _type: "span", _key: "p32.4", text: "slate-dom", marks: ["code"] },
      { _type: "span", _key: "p32.5", text: ", and ", marks: [] },
      { _type: "span", _key: "p32.6", text: "slate-react", marks: ["code"] },
      {
        _type: "span",
        _key: "p32.7",
        text: " into the PTE monorepo as internal packages. Remove the external npm dependencies. Strip the 78% of Slate\u2019s API surface we don\u2019t use. All existing tests pass, behavioral equivalence verified. This also fixes a real production headache: we don\u2019t control how Slate declares ",
        marks: [],
      },
      { _type: "span", _key: "p32.8", text: "slate-dom", marks: ["code"] },
      {
        _type: "span",
        _key: "p32.9",
        text: " as a peer dependency, which means Canvas (which depends on PTE both directly and through Sanity) ends up pulling in ",
        marks: [],
      },
      { _type: "span", _key: "p32.10", text: "slate-dom", marks: ["code"] },
      {
        _type: "span",
        _key: "p32.11",
        text: " multiple times. Duplicate copies, bundle bloat, subtle bugs. Vendoring eliminates this entire class of dependency-graph problems.",
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
        text: "Step 2: Progressively unify.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p33.1",
        text: " With the code in-house, we can start collapsing the translation layer piece by piece. Eliminate the dual-model sync and make Slate\u2019s tree the PT tree directly. Merge the render pipeline so PTE\u2019s multi-callback dispatch is first-class instead of a layer on top. Unify normalization into a single pass. Merge the two Editable components (PTE\u2019s 27KB wrapper + Slate\u2019s 76KB = 103KB today; target ~45\u201350KB unified). Each change is a focused PR with clear before/after.",
        marks: [],
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
        text: "Step 1 is low-risk and immediately beneficial. We stop depending on an external package with no dedicated maintainer, and we can start stripping dead code. Step 2 is where the real gains compound: fewer bugs, an estimated ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p34.1",
        text: "60\u201370% reduction in per-keystroke overhead",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p34.2",
        text: " by eliminating boundary crossings and translation, simpler debugging, and a clear path to containers.",
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
        text: "The total codebase should ",
        marks: [],
      },
      { _type: "span", _key: "p35.1", text: "shrink", marks: ["em"] },
      {
        _type: "span",
        _key: "p35.2",
        text: ", not grow. We\u2019re not adding Slate\u2019s code on top of ours. We\u2019re collapsing both into something smaller and more coherent than either.",
        marks: [],
      },
    ],
  },

  // === What we keep ===
  {
    _type: "block",
    _key: "h2g",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2g.0",
        text: "What we keep",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p36",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p36.0",
        text: "Let\u2019s be clear about what we\u2019re preserving. Slate\u2019s core value is the hard-won ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p36.1",
        text: "contenteditable",
        marks: ["code"],
      },
      {
        _type: "span",
        _key: "p36.2",
        text: " handling, DOM reconciliation, selection management, input handling, IME composition, mobile keyboard support. All of it stays. This is battle-tested code across browsers and edge cases. We\u2019re not rewriting it. We\u2019re owning it.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p37",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p37.0",
        text: "What we\u2019re removing is the translation layer between Slate and PTE. The dual-model sync. The patch conversion. The render dispatch indirection. The double normalization pass. The 96 code paths that exist only because two systems need to agree on what the document looks like.",
        marks: [],
      },
    ],
  },

  // === PTE has earned this ===
  {
    _type: "block",
    _key: "h2g2",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2g2.0",
        text: "PTE has earned this",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p37b",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p37b.0",
        text: "There\u2019s a version of this argument that\u2019s purely negative: Slate is holding us back, the translation layer is expensive, we need to escape. But that misses something. PTE has become a seriously good editor in its own right.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p37c",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p37c.0",
        text: "Hundreds of test cases. Predictable typing behavior out of the box, the kind of consistency a framework can never offer because frameworks can\u2019t have opinions. A composable Behavior API that lets us define exactly how every user action should work. A collaborative editing pipeline that handles real-time multi-user editing with conflict resolution.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p37d",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p37d.0",
        text: "Slate can\u2019t offer these things \u2014 not because it\u2019s poorly built, but because it\u2019s a framework. ",
        marks: [],
      },
      {
        _type: "span",
        _key: "p37d.1",
        text: "Frameworks stay general. Products get specific.",
        marks: ["strong"],
      },
      {
        _type: "span",
        _key: "p37d.2",
        text: " PTE got specific a long time ago, and it\u2019s better for it.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p37e",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p37e.0",
        text: "This isn\u2019t just about removing a dependency. PTE has grown into something that deserves its own foundation.",
        marks: [],
      },
    ],
  },

  // === The bottom line ===
  {
    _type: "block",
    _key: "h2h",
    style: "h2",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "h2h.0",
        text: "The bottom line",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p38",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p38.0",
        text: "PTE has already built a parallel editor runtime. We maintain 493KB of integration code to bridge between our system and a 513KB framework we\u2019ve mostly outgrown. That bridge costs us about one bug per week, 40\u201350 extra function calls per keystroke, and 106KB of tests that exist just to verify the translation doesn\u2019t drift.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p39",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p39.0",
        text: "We\u2019re not leaving Slate because it\u2019s bad. We\u2019re leaving because we\u2019ve already left.",
        marks: ["highlight"],
      },
    ],
  },
  {
    _type: "block",
    _key: "p40",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p40.0",
        text: "The question isn\u2019t whether to own the editor \u2014 it\u2019s whether to keep pretending we don\u2019t.",
        marks: [],
      },
    ],
  },
  {
    _type: "block",
    _key: "p41",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: "p41.0",
        text: "It\u2019s time to make it official.",
        marks: ["em"],
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
  if (isFactBox(block)) return `${block.number} — ${block.label}`;
  if ("children" in block && Array.isArray(block.children)) {
    const text = block.children
      .filter((c): c is { _type: "span"; text: string } => "text" in c)
      .map((c) => c.text)
      .join("");
    // Truncate long blocks
    return text.length > 80 ? text.slice(0, 80) + "…" : text;
  }
  return key;
}
