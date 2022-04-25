import { FC } from 'react';

export interface SpacelaunchLayoutProps {
  heroComponent: FC,
  contentComponent: FC,
  settings: {
    hasHeaderLink : boolean
		bg: string | null | undefined
  }
}