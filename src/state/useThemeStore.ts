import { PropertyViewerTheme, getPropertyViewerTheme } from 'assets/styles/theme/PropertyViewerTheme';
import { ThemesEnum } from 'assets/styles/theme/ThemesEnum';
import create from 'zustand'

interface ThemeState {
  theme: PropertyViewerTheme;
  changeTheme: (theme: ThemesEnum) => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  theme: getPropertyViewerTheme(ThemesEnum.DARKBLUE_THEME),
  changeTheme: (theme: ThemesEnum) => {
    set(() => ({
      theme: getPropertyViewerTheme(theme) 
    }));
  }
}))
