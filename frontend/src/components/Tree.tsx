import React, { Component, RefObject } from "react";
import OrgChart from "@balkangraph/orgchart.js";

interface Node {
  name: string;
  img: string;
  // Add more fields if needed
}

interface ChartProps {
  nodes: Node[];
}

export default class Chart extends Component<ChartProps> {
  private divRef: RefObject<HTMLDivElement>;
  private chart: any;

  constructor(props: ChartProps) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.chart = new OrgChart(this.divRef.current!, {
      nodes: this.props.nodes,
      nodeBinding: {
        field_0: "name",
        img_0: "img",
      },
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
