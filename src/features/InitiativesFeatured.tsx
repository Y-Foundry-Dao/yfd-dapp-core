import styles from '@scss/app.module.scss';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import styleBar from '@scss/progressbar.module.scss';

export default function InitiativesFeatured() {
  return (
    <Box>
      <div className={styles['content-section']}>
        <fieldset className={styles.popoverActionsSection} role="presentation">
          <legend className={styles.headingLegend} role="presentation">
            <h2>Initiatives</h2>
          </legend>
          <div className={styles['apps-card']}>
            <div className={styles['app-card']}>
              <Flex>
                <Box>
                  <span>
                    <img src="https://miro.medium.com/fit/c/110/110/1*EDnOn77npNc0Wgum6NDnaA.png" />
                    Angel Protocol
                  </span>
                </Box>
                <Spacer />
                <Box as="span" alignItems="right" />
              </Flex>
              <div className={styles['app-card__subtext']}>
                Web3 Programmable Endowments
              </div>
              <div className={styles['app-card-buttons']}>
                <div className={styleBar.chart}>
                  <div
                    className={[
                      styleBar['bar'],
                      styleBar['bar-75'],
                      styleBar['lime']
                    ].join(' ')}
                  >
                    <div className={[styleBar.face, styleBar.top].join(' ')}>
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div
                      className={[styleBar.face, styleBar['side-0']].join(' ')}
                    >
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div className={[styleBar.face, styleBar.floor].join(' ')}>
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div
                      className={[styleBar.face, styleBar['side-a']].join(' ')}
                    ></div>
                    <div
                      className={[styleBar.face, styleBar['side-b']].join(' ')}
                    ></div>
                    <div
                      className={[styleBar.face, styleBar['side-1']].join(' ')}
                    >
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['app-card']}>
              <span>
                <img src="https://pbs.twimg.com/profile_images/1595243832911613952/rM2Y50os_400x400.jpg" />
                Tradooors
              </span>
              <div className={styles['app-card__subtext']}>
                New collection mint slot reservations
              </div>
              <div className={styles['app-card-buttons']}>
                <div className={styleBar.chart}>
                  <div
                    className={[
                      styleBar['bar'],
                      styleBar['bar-35'],
                      styleBar['red']
                    ].join(' ')}
                  >
                    <div className={[styleBar.face, styleBar.top].join(' ')}>
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div
                      className={[styleBar.face, styleBar['side-0']].join(' ')}
                    >
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div className={[styleBar.face, styleBar.floor].join(' ')}>
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div
                      className={[styleBar.face, styleBar['side-a']].join(' ')}
                    ></div>
                    <div
                      className={[styleBar.face, styleBar['side-b']].join(' ')}
                    ></div>
                    <div
                      className={[styleBar.face, styleBar['side-1']].join(' ')}
                    >
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['app-card']}>
              <span>
                <img src="https://pbs.twimg.com/profile_images/1597672291839901696/Q2HaD9zp_400x400.jpg" />
                JoeDen
              </span>
              <div className={styles['app-card__subtext']}>
                Build a Community Clubhouse
              </div>
              <div className={styles['app-card-buttons']}>
                <div className={styleBar.chart}>
                  <div
                    className={[
                      styleBar['bar'],
                      styleBar['bar-55'],
                      styleBar['green']
                    ].join(' ')}
                  >
                    <div className={[styleBar.face, styleBar.top].join(' ')}>
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div
                      className={[styleBar.face, styleBar['side-0']].join(' ')}
                    >
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div className={[styleBar.face, styleBar.floor].join(' ')}>
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                    <div
                      className={[styleBar.face, styleBar['side-a']].join(' ')}
                    ></div>
                    <div
                      className={[styleBar.face, styleBar['side-b']].join(' ')}
                    ></div>
                    <div
                      className={[styleBar.face, styleBar['side-1']].join(' ')}
                    >
                      <div className={styleBar['growing-bar']}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </Box>
  );
}
