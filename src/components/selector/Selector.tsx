import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import assetsObjectAtom from 'recoil/assets/atom';
import assetToBorrowAtom from 'recoil/assetToBorrow/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

function Selector() {
  const assetObject = useRecoilValue(assetsObjectAtom);
  const [assetToBorrow, setAssetToBorrow] = useRecoilState(assetToBorrowAtom);

  const handleAssetChange = (event: SelectChangeEvent) => {
    setAssetToBorrow(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="asset-select-label">Asset</InputLabel>
      <Select
        labelId="asset-select-label"
        id="asset-select"
        value={assetToBorrow}
        label="Asset"
        onChange={handleAssetChange}
        defaultValue="terra1csr22xvxs6r3gkjsl7pmjkmpt39mwjsrm0e2r8"
        autoWidth
      >
        {Object.entries(assetObject).map((asset, i) => {
          return asset[1].label == 'aUST' ? null : (
            <MenuItem key={i} value={asset[1].contract}>
              {asset[1].label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default Selector;
