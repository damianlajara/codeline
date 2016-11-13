import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "height": "100%"
    },
    "html": {
        "height": "100%"
    },
    "row-offcanvas": {
        "height": "100%",
        "position": "relative",
        "WebkitTransition": "all 0.25s ease-out",
        "MozTransition": "all 0.25s ease-out",
        "transition": "all 0.25s ease-out",
        "width": "calc(100% + 220px)"
    },
    "sidebar": {
        "width": "inherit",
        "minWidth": 220,
        "maxWidth": 220,
        "backgroundColor": "#f5f5f5",
        "float": "left",
        "height": "100%",
        "position": "relative",
        "overflowY": "auto",
        "overflowX": "hidden"
    },
    "main": {
        "height": "100%",
        "overflow": "auto"
    },
    "row-offcanvas-left": {
        "left": -220
    },
    "row-offcanvas-leftactive": {
        "left": 0
    },
    "sidebar-offcanvas": {
        "position": "absolute",
        "top": 0
    }
});