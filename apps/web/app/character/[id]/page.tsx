"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactFlow, Node, Edge } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { getPersonTree } from "@utils";
import { useLayoutedElements } from "@hooks";

const Character = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const getLayoutedElements = useLayoutedElements();

  useEffect(() => {
    const personId = Number(params.id);

    if (!personId) return;

    (async () => {
      const result = await getPersonTree(personId);

      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(result?.nodes || [], result?.edges || []);

      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    })();
  }, []);

  if (!nodes.length || !edges.length) {
    return (
      <div className="h-screen flex justify-center items-center">Loading</div>
    );
  }

  return (
    <div className="p-4">
      <button type="button" onClick={() => router.back()}>
        Back to List
      </button>
      <div className="h-[640px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          style={{ height: "100%" }}
          draggable={false}
          nodesConnectable={false}
          edgesFocusable={false}
          snapToGrid
          fitView
          attributionPosition="top-right"
        />
      </div>
    </div>
  );
};

export default Character;
