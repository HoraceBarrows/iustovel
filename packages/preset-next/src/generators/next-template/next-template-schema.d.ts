/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Generate a Next.js template
 */
export interface NextTemplateSchema {
  name: string;
  /**
   * Name of the web application (overrides name)
   */
  webName: string;
  directory: string;
  /**
   * The template to use
   */
  template: "base" | "none" | "tailwind";
  /**
   * The npm scope to use
   */
  npmScope: string;
  /**
   * Anchor template to use
   */
  anchor?: "none" | "counter" | "basic";
  /**
   * Anchor project name
   */
  anchorName?: string;
  /**
   * Anchor program name
   */
  anchorProgram?: string;
}