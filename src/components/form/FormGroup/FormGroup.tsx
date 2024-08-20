type FormGroupProps = {
  children: React.ReactNode;
};

function FormGroup({ children }: FormGroupProps): JSX.Element | null {
  return (
    <div className="flex flex-row flex-wrap gap-4 p-4 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50">
      {children}
    </div>
  );
}

export default FormGroup;
