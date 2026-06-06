import { create } from "zustand";
import type { SubgraphInput } from "./core/types";

// Single source of truth for the workspace. Composition output is *derived*
// state (recomputed when subgraphs change), never hand-edited.

export interface WorkspaceState {
  subgraphs: SubgraphInput[];
  activeSubgraph: number;
  query: string;
  variables: string;
  seed: number;

  addSubgraph: (name: string) => void;
  setSubgraphSdl: (index: number, sdl: string) => void;
  setActiveSubgraph: (index: number) => void;
  setQuery: (query: string) => void;
  setVariables: (variables: string) => void;
  setSeed: (seed: number) => void;
}

const initialSubgraphs: SubgraphInput[] = [
  {
    name: "products",
    sdl: "type Query {\n  products: [Product]\n}\n\ntype Product {\n  id: ID!\n  name: String\n}\n",
  },
];

export const useWorkspace = create<WorkspaceState>((set) => ({
  subgraphs: initialSubgraphs,
  activeSubgraph: 0,
  query: "query {\n  products {\n    id\n    name\n  }\n}\n",
  variables: "{}",
  seed: 42,

  addSubgraph: (name) =>
    set((state) => ({
      subgraphs: [...state.subgraphs, { name, sdl: "" }],
      activeSubgraph: state.subgraphs.length,
    })),
  setSubgraphSdl: (index, sdl) =>
    set((state) => ({
      subgraphs: state.subgraphs.map((sg, i) => (i === index ? { ...sg, sdl } : sg)),
    })),
  setActiveSubgraph: (index) => set({ activeSubgraph: index }),
  setQuery: (query) => set({ query }),
  setVariables: (variables) => set({ variables }),
  setSeed: (seed) => set({ seed }),
}));
