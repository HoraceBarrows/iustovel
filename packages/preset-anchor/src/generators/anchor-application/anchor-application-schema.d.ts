/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Generate an Anchor application
 */
export interface AnchorApplicationSchema {
  /**
   * Name of the project
   */
  name: string;
  /**
   * Name of the program
   */
  programName?: string;
  /**
   * Skip formatting files
   */
  skipFormat?: boolean;
  /**
   * The template to use
   */
  template?: "counter" | "basic" | "none";
}
