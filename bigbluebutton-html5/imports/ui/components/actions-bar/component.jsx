import React, { PureComponent } from 'react'; 
import { styles } from './styles.scss'; 
import PresentationOptionsContainer from './presentation-options/component';

class ActionsBar extends PureComponent {
  render() {
    const { 
      isLayoutSwapped,
      toggleSwapLayout, 
      isThereCurrentPresentation, 
    } = this.props;
 

    return (
      <div className={styles.right}>
          {isLayoutSwapped
            ? (
              <PresentationOptionsContainer
                toggleSwapLayout={toggleSwapLayout}
                isThereCurrentPresentation={isThereCurrentPresentation}
              />
            )
            : null
          }
        </div>
    );
  }
}

export default ActionsBar;