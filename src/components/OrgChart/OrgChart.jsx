import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { useNavigate } from "react-router-dom";
import styles from "./OrgChart.module.scss"; // Assuming you're using SCSS

// Data for the tree structure
const treeData = {
  name: "Bank",
  route: "/ceo",
  children: [
    {
      name: "Transaction Banking",
      route: "/cto",
      children: [
        { name: "Payments", route: "/" },
        { name: "Cash Management", route: "/" },

        { name: "Treasury Services", route: "/" },
        { name: "Corporate Lending", route: "/" },
        { name: "Merchant Services", route: "/" },
      ],
    },
    {
      name: "Individual Banking",
      route: "/cfo",
      children: [
        { name: "Digital Banking", route: "/" },
        { name: "Investment Services", route: "/" },

        { name: "Wealth Management", route: "/" },
      ],
    },
  ],
};

// Recursive component for TreeNode
const TreeNodeComponent = ({ node }) => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <TreeNode
      label={
        <div
          className={styles.nodeCard}
          onClick={() => handleClick(node.route)}
        >
          {node.name}
        </div>
      }
    >
      {node.children &&
        node.children.map((child, index) => (
          <TreeNodeComponent key={index} node={child} />
        ))}
    </TreeNode>
  );
};

// Main OrgChart component
export const OrgChart = () => {
  return (
    <div className={styles.chartContainer}>
      <Tree
        lineWidth="2px"
        lineColor="#212a31"
        lineBorderRadius="10px"
        label={<div className={styles.treeRoot}>Banking System</div>}
      >
        <TreeNodeComponent node={treeData} />
      </Tree>
    </div>
  );
};
