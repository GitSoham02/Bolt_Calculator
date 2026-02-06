import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CompatibilityIcon } from './CompatibilityIcon'; // The component we just built

function ComparisonTable({ limits, obtainedValues }) {
  const roughBoltData = [
    {
      name: 'Tensile stress',
      calculated: obtainedValues.tensileStress,
      permissible: limits.tensileStress,
      unit: 'Mpa',
    },
    {
      name: 'Shear stress',
      calculated: obtainedValues.shearStress,
      permissible: limits.shearStress,
      unit: 'Mpa',
    },
    {
      name: 'Bearing stress',
      calculated: obtainedValues.plateBearingStress,
      permissible: limits.plateBearingStress,
      unit: 'Mpa',
    },
    {
      name: 'Thread shres stress',
      calculated: obtainedValues.threadShearStress,
      permissible: limits.threadShearStress,
      unit: 'Mpa',
    },
    {
      name: 'Preload',
      calculated: obtainedValues.preLoad,
      permissible: limits.preLoad,
      unit: 'Newtons',
    },
    {
      name: 'Separation load',
      calculated: obtainedValues.separationLoad,
      permissible: limits.separationLoad,
      unit: 'Newtons',
    },
  ];

  const boltData = roughBoltData.map((item) => ({
    ...item,
    calculated: item.calculated.toFixed(2),
    permissible: item.permissible.toFixed(2),
  }));

  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-full sm:max-w-150 lg:max-w-175 h-full mx-auto">
        <CardHeader className="flex flex-col items-center px-4 sm:px-6">
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-medium text-center">
            Stress and Load Verification
          </CardTitle>
          <CardDescription className="text-center">
            Comparison of calculated values against permissible limits.
          </CardDescription>
        </CardHeader>
        {/* //--------------------- */}

        <CardContent className="flex w-full flex-row gap-6 justify-center px-2 sm:px-4 lg:px-6 overflow-x-auto">
          <Table className="w-full min-w-125">
            <TableCaption>
              All values are evaluated as per applicable design assumptions.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Parameter</TableHead>
                <TableHead>Calculated Value</TableHead>
                <TableHead>Permissible Limit</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            {/* <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody> */}

            {/* -------------- */}

            <TableBody>
              {boltData.map((row) => {
                // Logic: Safe if calculated is less than or equal to permissible
                const isSafe = row.calculated <= row.permissible;

                return (
                  <TableRow key={row.name} className="hover:bg-slate-50/50">
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>
                      {row.calculated} {row.unit}
                    </TableCell>
                    <TableCell>
                      {row.permissible} {row.unit}
                    </TableCell>
                    <TableCell className="text-center">
                      <CompatibilityIcon
                        variant="success"
                        className="size-5 mx-auto"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        {/* //--------------------- */}
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </div>
  );
}

export default ComparisonTable;
