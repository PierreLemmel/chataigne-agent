export type RGB = {
    r: number; // 0-255
    g: number; // 0-255 
    b: number; // 0-255
}

export type RGBA = RGB & {
    a: number; // 0-1
}

export type HSV = {
    h: number; // 0-360
    s: number; // 0-100
    v: number; // 0-100
}

export type HSVA = HSV & {
    a: number; // 0-1
}

export type HEX = string; // #RRGGBB or #RRGGBBAA

export type NamedColor = 
    | 'black'
    | 'silver'
    | 'gray' 
    | 'white'
    | 'maroon'
    | 'red'
    | 'purple'
    | 'fuchsia'
    | 'green'
    | 'lime'
    | 'olive'
    | 'yellow'
    | 'navy'
    | 'blue'
    | 'teal'
    | 'aqua';

export type Color = RGB | RGBA | HSV | HEX | NamedColor;

const namedColorMap: Record<NamedColor, RGB> = {
    black: { r: 0, g: 0, b: 0 },
    silver: { r: 192, g: 192, b: 192 },
    gray: { r: 128, g: 128, b: 128 },
    white: { r: 255, g: 255, b: 255 },
    maroon: { r: 128, g: 0, b: 0 },
    red: { r: 255, g: 0, b: 0 },
    purple: { r: 128, g: 0, b: 128 },
    fuchsia: { r: 255, g: 0, b: 255 },
    green: { r: 0, g: 128, b: 0 },
    lime: { r: 0, g: 255, b: 0 },
    olive: { r: 128, g: 128, b: 0 },
    yellow: { r: 255, g: 255, b: 0 },
    navy: { r: 0, g: 0, b: 128 },
    blue: { r: 0, g: 0, b: 255 },
    teal: { r: 0, g: 128, b: 128 },
    aqua: { r: 0, g: 255, b: 255 }
};

export function rgbToHex(rgb: RGB): HEX {
    const r = rgb.r.toString(16).padStart(2, '0');
    const g = rgb.g.toString(16).padStart(2, '0');
    const b = rgb.b.toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

export function rgbaToHex(rgba: RGBA): HEX {
    const hex = rgbToHex(rgba);
    const a = Math.round(rgba.a * 255).toString(16).padStart(2, '0');
    return `${hex}${a}`;
}

export function hexToRgb(hex: HEX): RGB {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) throw new Error('Invalid hex color');
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}

export function hexToRgba(hex: HEX): RGBA {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
    if (!result) throw new Error('Invalid hex color');
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: result[4] ? parseInt(result[4], 16) / 255 : 1
    };
}

export function rgbToHsv(rgb: RGB): HSV {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;

    let h = 0;
    const s = max === 0 ? 0 : (diff / max) * 100;
    const v = max * 100;

    if (diff !== 0) {
        if (max === r) {
            h = 60 * ((g - b) / diff);
        } else if (max === g) {
            h = 60 * (2 + (b - r) / diff);
        } else {
            h = 60 * (4 + (r - g) / diff);
        }
    }

    if (h < 0) h += 360;

    return { h, s, v };
}

export function hsvToRgb(hsv: HSV): RGB {
    const h = hsv.h;
    const s = hsv.s / 100;
    const v = hsv.v / 100;

    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;

    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
        [r, g, b] = [c, x, 0];
    } else if (h >= 60 && h < 120) {
        [r, g, b] = [x, c, 0];
    } else if (h >= 120 && h < 180) {
        [r, g, b] = [0, c, x];
    } else if (h >= 180 && h < 240) {
        [r, g, b] = [0, x, c];
    } else if (h >= 240 && h < 300) {
        [r, g, b] = [x, 0, c];
    } else {
        [r, g, b] = [c, 0, x];
    }

    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    };
}

export function namedColorToRgb(color: NamedColor): RGB {
    return namedColorMap[color];
}


export function isRgb(color: Color): color is RGB {
    return typeof color === 'object'
        && 'r' in color
        && 'g' in color
        && 'b' in color;
}

export function isRgba(color: Color): color is RGBA {
    return isRgb(color) && 'a' in color;
}

export function isHex(color: Color): color is HEX {
    return typeof color === 'string' && color.startsWith('#');
}

export function isNamedColor(color: Color): color is NamedColor {
    return typeof color === 'string' && color in namedColorMap;
}

export function isHsv(color: Color): color is HSV {
    return typeof color === 'object'
        && 'h' in color
        && 's' in color
        && 'v' in color;
}

export function isHsva(color: Color): color is HSVA {
    return isHsv(color) && 'a' in color;
}

export function getAlpha(color: Color): number {
    if (isRgba(color) || isHsva(color)) {
        return color.a;
    }
    return 1;
}



export function colorToRgb(color: Color): RGB {
    if (typeof color === 'string') {
        if (color.startsWith('#')) {
            return hexToRgb(color);
        }
        return namedColorToRgb(color as NamedColor);
    }
    if ('h' in color) {
        return hsvToRgb(color);
    }
    return color;
}


export type ColorDescription = {
    rgb: RGB;
    hsv: HSV;
    hex: HEX;
    named: NamedColor|null;

    alpha: number;
}

export function colorToDescription(color: Color): ColorDescription {
    const rgb = colorToRgb(color);

    const hsv = rgbToHsv(rgb);

    const hex = rgbToHex(rgb);

    const named = isNamedColor(color) ? color : null;

    const alpha = isRgba(color) ? color.a : 1;

    return {
        rgb,
        hsv,
        hex,
        named,
        alpha
    };
}
