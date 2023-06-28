"use client";
import { Component } from "react";
// @ts-ignore
export class ErrorBoundary extends Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // @ts-ignore
  static getDerivedStateFromError(error) {
    return { hasError: false };
  }

  render() {
    // @ts-ignore
    return this.props.children;
  }
}
