'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ResultCard({ boltDesc, boltProperty }) {
  // const boltName = 'ISO 898-1 | M12 × 1.75 | Grade 8.8';
  const boltName = boltDesc.designation;

  const boltData = {
    name: boltDesc.designation,
    grade: boltProperty.xValue + boltProperty.yValue,
    diameter: boltDesc.nominalDiameter,
    threadMeanDiameter: boltDesc.threadMeanDiameter,
    tensileStressArea: boltDesc.tensileStressArea,
  };
  return (
    <Card className="w-full max-w-full sm:max-w-150 lg:max-w-175 h-full">
      <CardHeader className="flex flex-col items-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-medium text-center">
          Calculation Results
        </CardTitle>
        <CardDescription className="text-center">
          Results based on the provided input parameters.
        </CardDescription>
      </CardHeader>
      {/* //--------------------- */}

      <CardContent className="flex w-full flex-col gap-4 sm:gap-6 px-4 sm:px-6">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Selected Bolt</ItemTitle>
            <ItemDescription>{boltData.name}</ItemDescription>
          </ItemContent>
        </Item>
        {/* ////////////////////////////// */}
        <Item variant="outline" className="h-fit min-h-min py-4">
          <ItemContent>
            <ItemTitle>Bolt specifications</ItemTitle>
            <ItemDescription>
              Geometric and material properties of the selected bolt.
            </ItemDescription>

            <ul className="mt-2 list-disc pl-4 text-sm text-muted-foreground">
              <li>Grade: {boltData.grade}</li>
              <li>Diameter: {boltData.diameter} mm</li>
              <li>Thread Mean Diameter: {boltData.threadMeanDiameter} mm</li>

              <li>
                Tensile Stress Area: {boltData.tensileStressArea} mm
                <sup>2</sup>
              </li>
            </ul>
          </ItemContent>
        </Item>
      </CardContent>
      {/* //--------------------- */}
      <CardFooter className="flex-col gap-2">
        {/* <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button> */}
      </CardFooter>
    </Card>
  );
}
