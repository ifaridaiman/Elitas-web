import React from "react";

interface HistoryMissionProps {
    historyandmission: {
        historyStory: {
            para: string;
        }[];
        missionStatement: string;
    };
}

const HistoryMission = ({ historyandmission }: HistoryMissionProps) => {

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-healthcare-primary">Our History</h2>
                        {
                            historyandmission.historyStory.map((item, index) => (
                                <p key={index} className="text-lg text-foreground/80 leading-relaxed">
                                    {item.para}
                                </p>
                            ))
                        }
                        
                    </div>
                    <div className="bg-healthcare-secondary p-8 rounded-healthcare">
                        <h3 className="text-2xl font-bold text-healthcare-primary mb-4">Our Mission</h3>
                        <blockquote className="text-lg text-foreground/80 italic leading-relaxed">
                            "{historyandmission.missionStatement}"
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HistoryMission;
