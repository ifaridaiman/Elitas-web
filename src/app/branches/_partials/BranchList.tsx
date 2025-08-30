import BranchCard from '@/components/ui/BranchCard'

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  isMain?: boolean;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
}

interface BranchListProps {
  branches: Branch[];
}
const BranchList = ({branches}: BranchListProps) => {

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-healthcare-primary mb-4">
                        Find Your Nearest Branch
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Each location offers specialized services with convenient hours to fit your schedule.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {branches.map((branch) => (
                        <BranchCard key={branch.id} branch={branch} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BranchList