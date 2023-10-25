import * as React from "react";

// 1. Import the necessary components from Material UI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// 2. Create a new component called BreadcrumbsNavigation
export default function BreadcrumbsNavigation({ title }) {
  // 3. Return the Breadcrumbs component
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {/* 4. Add the first breadcrumb link */}
      <Link underline="hover" key="1" color="inherit" href="/">
        Products
      </Link>
      {/* 5. Add the final breadcrumb link */}
      <Typography key="3" color="text.primary">
        {title && title.replace(/^\w/, (c) => c.toUpperCase())}
      </Typography>
    </Breadcrumbs>
  );
}
