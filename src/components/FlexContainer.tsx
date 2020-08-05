import { withStyles } from "@material-ui/core/styles";
import { CSSProperties } from "jss/css";
import * as React from "react";

type FlexContainerProps = {
  classes: {
    flexContainer: string;
  };
  element?: "div" | "section" | "nav" | "ul" | "article" | "li";
  component?: React.ComponentType<any>;
  flow: "row" | "column";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  alignContent?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  width?: string;
  height?: string;
  children?: React.ReactNode;
  extraClasses?: string[] | string;
  componentKey?: string;
  "data-identifier"?: string;
  onClick?: (...args: any[]) => void;
  ref?: (node: HTMLElement) => void;
  style?: CSSProperties;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
};

type RenderedComponentProps = {
  className: string;
  children?: React.ReactNode;
  style: CSSProperties;
  key?: string;
  "data-identifier"?: string;
  onClick?: (...args: any[]) => void;
  ref?: (node: HTMLElement) => void;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
};

const FlexContainer = (props: FlexContainerProps) => {
  const {
    element = "div",
    onClick,
    component: BaseComponent,
    componentKey,
    width = "100",
    height,
    extraClasses = [],
    children,
    flow,
    alignItems,
    alignContent,
    justifyContent,
    wrap,
    classes,
    ref,
    style,
    onAnimationEnd,
    onAnimationStart,
  } = props;
  const baseClasses = [classes.flexContainer, flow];
  const classNames = Array.isArray(extraClasses)
    ? [...baseClasses, ...extraClasses]
    : baseClasses;
  if (alignItems) {
    classNames.push(`align-items-${alignItems}`);
  }
  if (alignContent) {
    classNames.push(`align-content-${alignContent}`);
  }
  if (justifyContent) {
    classNames.push(`justify-content-${justifyContent}`);
  }
  if (wrap) {
    classNames.push(`flex-${wrap}`);
  }
  if (!Array.isArray(extraClasses) && typeof extraClasses === "string") {
    classNames.push(extraClasses);
  }
  const componentProps: RenderedComponentProps = {
    className: classNames.join(" "),
    children: children,
    style: {
      ...style,
      width: width.match(/^[0-9.]*$/) ? `${width}%` : width,
    },
    key: componentKey,
  };

  if (onAnimationStart != null) {
    componentProps.onAnimationStart = onAnimationStart;
  }

  if (onAnimationEnd != null) {
    componentProps.onAnimationEnd = onAnimationEnd;
  }

  if (height) {
    componentProps.style.height = height;
  }

  if (props["data-identifier"]) {
    componentProps["data-identifier"] = props["data-identifier"];
  }

  if (onClick && typeof onClick === "function") {
    componentProps.onClick = onClick;
  }

  if (ref && typeof ref === "function") {
    componentProps.ref = ref;
  }

  if (BaseComponent) {
    return <BaseComponent {...componentProps} />;
  }
  const ContainerComponent = React.createElement(element, componentProps);
  return ContainerComponent;
};

const styles = {
  flexContainer: {
    display: "flex",
    "&.row": {
      flexFlow: "row",
    },
    "&.column": {
      flexFlow: "column",
    },
    "&.align-items-start": {
      alignItems: "flex-start",
    },
    "&.align-items-end": {
      alignItems: "flex-end",
    },
    "&.align-items-center": {
      alignItems: "center",
    },
    "&.align-items-baseline": {
      alignItems: "baseline",
    },
    "&.align-items-stretch": {
      alignItems: "stretch",
    },
    "&.align-content-start": {
      alignContent: "flex-start",
    },
    "&.align-content-end": {
      alignContent: "flex-end",
    },
    "&.align-content-center": {
      alignContent: "center",
    },
    "&.align-content-space-between": {
      alignContent: "space-between",
    },
    "&.align-content-space-around": {
      alignContent: "space-around",
    },
    "&.align-content-stretch": {
      alignContent: "stretch",
    },
    "&.justify-content-start": {
      justifyContent: "flex-start",
    },
    "&.justify-content-end": {
      justifyContent: "flex-end",
    },
    "&.justify-content-center": {
      justifyContent: "center",
    },
    "&.justify-content-space-between": {
      justifyContent: "space-between",
    },
    "&.justify-content-space-around": {
      justifyContent: "space-around",
    },
    "&.justify-content-space-evenly": {
      justifyContent: "space-evenly",
    },
    "&.flex-nowrap": {
      flexWrap: "nowrap",
    },
    "&.flex-wrap": {
      flexWrap: "wrap",
    },
    "&.flex-wrap-reverse": {
      flexWrap: "wrap-reverse",
    },
  },
};

export default withStyles(styles)(FlexContainer);
