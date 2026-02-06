'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { CompatibilityIcon } from './CompatibilityIcon';
import { ItemDescription } from '@/components/ui/item';

function CompatibilityBadge() {
  return (
    <div>
      <Card className="w-full max-w-full sm:max-w-150 lg:max-w-175 h-full">
        <CardHeader className="flex flex-col items-center px-4 sm:px-6">
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-medium text-center">
            Design Safety Check
          </CardTitle>
          <CardDescription className="text-center">
            Pass/fail status of critical design criteria.
          </CardDescription>
        </CardHeader>
        {/* //--------------------- */}

        {/* Badge: success or warning */}
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6">
          <Badge variant="success">
            <CompatibilityIcon variant="success" />
            <span>Tensile Stress</span>
          </Badge>
          <Badge variant="success">
            <CompatibilityIcon variant="success" />
            <span>Shear stress</span>
          </Badge>
          <Badge variant="success">
            <CompatibilityIcon variant="success" />
            <span>Bearing stress</span>
          </Badge>
          <Badge variant="success">
            <CompatibilityIcon variant="success" />
            <span>Thread shear</span>
          </Badge>
          <Badge variant="success">
            <CompatibilityIcon variant="success" />
            <span>Preload</span>
          </Badge>
          <Badge variant="success">
            <CompatibilityIcon variant="success" />
            <span>Separation load</span>
          </Badge>

          {/* <Item variant="outline">
            <ItemContent>
              <ItemTitle>Bolt &rarr;</ItemTitle>
              <ItemDescription>
                ISO 898-1 | M12 × 1.75 | Grade 8.8
              </ItemDescription>
            </ItemContent>
          </Item> */}
          {/* ////////////////////////////// */}
        </CardContent>
        {/* //--------------------- */}
        <CardFooter className="flex-col gap-2 px-4 sm:px-6">
          <ItemDescription>
            Status based on comparison with permissible limits.
          </ItemDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CompatibilityBadge;
