import styles from './App.module.css';
import { useState, useEffect } from 'react';
import SubMenu from './components/subMenu/subMenu';
import ActiveTab from './components/tabs/activeTab';
import Frame from './assets/images/Frame.svg';
import Frame2 from './assets/images/Frame2.svg';



export function App() {
  const [image, setImage] = useState(Frame);

  const [activeItem, setActiveItem] = useState<string>('Document Scanner');
  const [subHeader, setSubHeader] = useState<string>('Scan with Ease');
  const [description, setDescription] = useState<string>(
    'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TEXT, and Word format.',
  );

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 50); // Adjust the delay as needed

    // Clear the timeout on component unmount or when activeItem changes
    return () => {
      clearTimeout(timeout);
    };
  }, [activeItem]);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setShowText(false);
    // You can add logic here to perform actions based on the clicked item
    // Update subHeader and description based on active tab
    switch (item) {
      case 'Document Scanner':
        setSubHeader('Scan with Ease');
        setDescription(
          'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TEXT, and Word format.',
        );
        break;
      case 'Sign & Stamp':
        setImage(Frame2);
        setSubHeader('One-Tap Focus');
        setDescription(
          'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
        );
        break;
      case 'Batch Scanning':
        setSubHeader('Multiple Page Scan');
        setDescription(
          'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
        );
        break;

      case 'Advanced Filters':
        setSubHeader('Unique Filters');
        setDescription(
          'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
        );
        break;

      case 'Export & Share':
        setSubHeader('All-Round Conversion');
        setDescription('Export your scans as PDF,JPG,ZIP,TXT and Word.');
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="container">
        <ActiveTab
          activeItem={activeItem}
          subHeader={subHeader}
          description={description}
          image={image}
          showText={showText}
        />
        <SubMenu activeItem={activeItem} onItemClick={handleItemClick} />
      </div>

      <div className={styles.main}></div>
    </>
  );
}
