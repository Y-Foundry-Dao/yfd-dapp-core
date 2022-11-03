import { Text } from '@chakra-ui/react';
import React from 'react';

function EmergencyStatus({ emergencyInfo }: any) {
  return emergencyInfo === undefined ? (
    <Text>Loading...</Text>
  ) : (
    <Text>State of Proposal: {Object.keys(emergencyInfo.state)[0]}</Text>
  );
}

export default EmergencyStatus;
