import { Components, Theme } from "@mui/material";
import { ThemesEnum } from "./ThemesEnum";
import darkBlue from 'assets/styles/theme/themeVariants/darkBlue';
import lightOrange from 'assets/styles/theme/themeVariants/lightOrange';

export interface PropertyViewerTheme extends Theme {
  key: ThemesEnum
  components?: Components<Theme>;
}


export function getPropertyViewerTheme(theme: ThemesEnum): PropertyViewerTheme {
  switch (theme) {
      case ThemesEnum.DARKBLUE_THEME:
          return darkBlue;
      case ThemesEnum.LIGHTORANGE_THEME:
          return lightOrange;
  }
}