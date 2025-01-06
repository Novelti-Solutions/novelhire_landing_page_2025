import FormRequired from '@/components/form-required';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useBoolean } from '@/hooks/use-boolean';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
export const RHFAutocomplete = ({
  name,
  title,
  placeholder,
  content,
  noOption,
  options,
  target,
  getOptionLabel,
  ...other
}) => {
  const isOpen = useBoolean();
  const { control, setValue } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel>
            <FormRequired title={title} />
          </FormLabel>
          <Popover open={isOpen.value} onOpenChange={isOpen.onFalse}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  onClick={(event) => {
                    isOpen.onTrue();
                    event.preventDefault();
                  }}
                  className={cn(
                    'justify-between',
                    !Object.keys(field.value).length > 0 &&
                      'text-muted-foreground'
                  )}
                >
                  {Object.keys(field.value).length > 0
                    ? options.find(
                        (option) => option[target] === field.value[target]
                      )?.[getOptionLabel]
                    : `Select ${title}`}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder={placeholder} />
                <CommandList>
                  <CommandEmpty>No {noOption} found.</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        value={option}
                        key={option[target]}
                        onSelect={() => {
                          setValue(name, option, { shouldValidate: true });
                          isOpen.onFalse();
                        }}
                      >
                        {option?.[getOptionLabel]}
                        <Check
                          className={cn(
                            'ml-auto',
                            option[target] === field.value[target]
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
