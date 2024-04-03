import React, { useState } from "react";

export const CheckboxTree = ({ data, setGraph }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (itemName, checked) => {
    setCheckedItems((prevCheckedItems) => {
      let newCheckedItems = { ...prevCheckedItems, [itemName]: checked };

      if (checked) {
        const parts = itemName.split(".");
        parts.pop();
        let parent = parts.join(".");
        while (parent) {
          newCheckedItems = { ...newCheckedItems, [parent]: true };
          const parentParts = parent.split(".");
          parentParts.pop();
          parent = parentParts.join(".");
        }
      } else {
        uncheckChildren(itemName, newCheckedItems);
      }
      
      setGraph(getGraph(newCheckedItems));

      return newCheckedItems;
    });
  };

  const getGraph = (checkedItems) => {
    const graph = {};
  
    for (const itemName in checkedItems) {
      if (checkedItems[itemName]) {
        const parts = itemName.split(".");
        let currentNode = graph;
  
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          if (!currentNode[part]) {
            currentNode[part] = {};
          }
          currentNode = currentNode[part];
        }
      }
    }
  
    return graph;
  };

  const uncheckChildren = (parentName, checkedItems) => {
    for (const key in checkedItems) {
      if (key.startsWith(parentName + ".")) {
        checkedItems[key] = false;
        if (typeof checkedItems[key] === "object") {
          uncheckChildren(key, checkedItems);
        }
      }
    }
  };

  const renderCheckboxes = (items, prefix = "") => {
    const renderedCheckboxes = [];
    for (const key in items) {
      const itemName = prefix ? `${prefix}.${key}` : key;
      renderedCheckboxes.push(
        <div key={itemName}>
          <input
            id={itemName}
            type="checkbox"
            checked={checkedItems[itemName] || false}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            onChange={(e) => handleCheckboxChange(itemName, e.target.checked)}
          />
          <label htmlFor={itemName}>{key}</label>
        </div>
      );
      if (typeof items[key] === "object") {
        renderedCheckboxes.push(
          <div key={`${itemName}-children`} style={{ paddingLeft: "20px" }}>
            {renderCheckboxes(items[key], itemName)}
          </div>
        );
      }
    }
    return renderedCheckboxes;
  };

  return <div>{renderCheckboxes(data)}</div>;
};
