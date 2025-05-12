import type { ComponentPropsWithoutRef } from "react";

export interface IContainer {
    children: React.ReactNode;
}

export type TImage = ComponentPropsWithoutRef<"img">;

export interface IACategory {
    imageSrc: string;
    nameCategory: string;
    path: string;
    count: number;
  }