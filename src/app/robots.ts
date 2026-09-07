// *****************************************************************************
// *                  Developed by Vanderson Rodrigues - 2026
// *****************************************************************************

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" } }; }
