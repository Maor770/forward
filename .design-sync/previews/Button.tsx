import * as React from "react";
import { Button, Surface } from "@maorforward/ds";

const WhatsAppIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487 2.728 1.178 2.728.785 3.221.736.493-.049 1.588-.649 1.811-1.276.224-.626.224-1.163.156-1.275-.067-.113-.265-.18-.562-.329"/>
  </svg>
);

export const Primary = () => (
  <Surface tone="paper">
    <Button variant="primary" icon={WhatsAppIcon}>Let's Talk</Button>
  </Surface>
);

export const Secondary = () => (
  <Surface tone="paper">
    <Button variant="secondary">View the Properties</Button>
  </Surface>
);

export const Plain = () => (
  <Surface tone="paper">
    <Button variant="primary">Partner With Maor</Button>
  </Surface>
);
