import React from 'react'

interface HeaderProps {
  phoneNumber?: string
  multipleLocation?: string
  announcement?: string
}

const Header: React.FC<HeaderProps> = ({ 
  phoneNumber = "+1 (555) 123-4567", 
  multipleLocation = "5 Locations Available", 
  announcement 
}) => {
  return (
    <div className="bg-healthcare-warm text-primary-foreground py-2 px-4">
      {announcement ? (
        // Show announcement centered when there's an announcement
        <div className="flex justify-center">
          <p className="text-sm text-healthcare-primary font-medium">{announcement}</p>
        </div>
      ) : (
        // Show phone number and multiple locations with justify-between when no announcement
        <div className="flex justify-between items-center">
          <p className="text-sm text-healthcare-primary font-medium">{phoneNumber}</p>
          <p className="text-sm text-healthcare-primary font-medium">{multipleLocation}</p>
        </div>
      )}
    </div>
  )
}

export default Header