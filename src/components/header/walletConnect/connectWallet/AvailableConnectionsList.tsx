import { useWallet } from '@terra-money/wallet-provider';
import { MenuItem, Image, MenuGroup } from '@chakra-ui/react';

function AvailableConnectionsList() {
  const { availableConnections, connect } = useWallet();
  return (
    <MenuGroup title="Ready to Connect">
      {availableConnections.map(({ type, name, icon, identifier = '' }) => (
        <MenuItem
          icon={<Image height={5} src={icon} alt={name} />}
          onClick={() => {
            connect(type, identifier);
          }}
          key={'connection-' + type + identifier}
        >
          {name}
        </MenuItem>
      ))}
    </MenuGroup>
  );
}

export default AvailableConnectionsList;
