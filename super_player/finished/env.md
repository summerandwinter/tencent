## collectGPUInfo

```bash
function Vr() {
    try {
      var e = document.createElement("canvas").getContext("webgl");
      var t = e == null ? undefined : e.getExtension("WEBGL_debug_renderer_info");
      if (t) {
        return tr = {
          renderer: (e == null ? undefined : e.getParameter(t.UNMASKED_RENDERER_WEBGL)) || "",
          vendor: (e == null ? undefined : e.getParameter(t.UNMASKED_VENDOR_WEBGL)) || ""
        };
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
}
```

模拟值

```json
{
  "renderer": "ANGLE (Intel Inc., Intel Iris Pro OpenGL Engine, OpenGL 4.1)",
  "vendor": "Google Inc. (Intel Inc.)"
}
```

## isHardwareAccelerated

```javascript
var $A = {};
function xr() {
  if ($A.hardwareAccelerated !== undefined) {
    return $A.hardwareAccelerated;
  }
  try {
    var e = document.createElement("canvas");
    var t = {
      alpha: true,
      antialias: false,
      depth: true,
      failIfMajorPerformanceCaveat: true,
      stencil: true,
    };
    $A.hardwareAccelerated =
      !!e.getContext("webgl", t) || !!e.getContext("experimental-webgl", t);
    return $A.hardwareAccelerated;
  } catch (e) {
    $A.hardwareAccelerated = false;
    return false;
  }
}
```

模拟参数

```text
true
```

YS -> VideoInfo
