import { useEffect, useRef, useState } from 'react';

import { Modal, Typography, Box, Button, FormControl } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Stack } from '@mui/system';
import { englishLevel, optionPay, sourceInfo } from '../../staticData/otherQuestions';
import { mexicoStates } from '../../staticData/mexicoStates';
import { areasPrograms, programsStudy, programsType, startStudy } from '../../staticData/programsStudy';
import { countries } from '../../staticData/countries';
import { setProspectToEdit } from '../../store/auth/authSlice';

export const EditMyData = ({ openDialog, editData }) => {
  console.log('en EditMyData');

  const { prospectToEdit } = useSelector((state) => state.auth);
  const { isCommunicating } = useSelector((state) => state.commonProcess);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const [tempProgramType, setTempProgramType] = useState(['-']);
  const [tempAreas, setTempAreas] = useState(['-']);
  const [tempStartStudy, setTempStartStudy] = useState(['-']);

  const [able, setAble] = useState(false);

  const {
    program,
    program_type,
    area_study,
    start_year,
    birthday,
    level_english,
    pay,

    formState,
    onInputChange,
    onResetForm,
  } = useForm(prospectToEdit);

  const handleOpen = () => {
    setScroll('paper');
    setOpen(true);
  };

  const handleClose = () => {
    //dispatch(setProspectToEdit(undefined));
    setAble(false);
    // dispatch(setCurrentProcess('View'));
    setOpen(false);
  };

  const onSave = (event) => {
    event.preventDefault();
    console.log('voy a guardar ', formState);
    editData(formState);
    handleClose();
  };

  useEffect(() => {
    openDialog && handleOpen();
  }, [openDialog]);

  useEffect(() => {
    if (programsStudy.includes(program)) {
      console.log('********program es ...*************', program);
      setTempProgramType(programsType[program]);
      setTempAreas(areasPrograms[program]);
      setTempStartStudy(startStudy[program]);
      setAble(true);
    }
  }, [program]);

  const sxConfig = { border: 'none', mb: 1 };
  const formulary = (
    <>
      <Stack
        sx={{
          width: '100%',
          minWidth: { xs: '300px', sm: '360px', md: '400px' },
          gap: '1.5rem',
        }}
      >
        <Grid item xs={12} md={12}>
          {/*Program*/}
          <FormControl fullWidth>
            <InputLabel id="program_">Program</InputLabel>
            <Select
              fullWidth
              labelId="program_"
              id="program"
              value={program}
              name="program"
              label="program"
              onChange={onInputChange}
              required
              sx={sxConfig}
            >
              {programsStudy.map((program) => (
                <MenuItem key={program} value={program}>
                  {program}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/*area*/}
          {able && (
            <FormControl fullWidth>
              <InputLabel id="area_study_">Area Study</InputLabel>
              <Select
                fullWidth
                labelId="area_study_"
                id="area_study"
                value={area_study}
                name="area_study"
                label="area_study"
                onChange={onInputChange}
                required
                sx={sxConfig}
              >
                {tempAreas.map((area) => (
                  <MenuItem key={area} value={area}>
                    {area}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {/*Program type*/}
          {able && (
            <FormControl fullWidth>
              <InputLabel id="program_type_">Program Type</InputLabel>
              <Select
                fullWidth
                labelId="program_type_"
                id="program_type"
                value={program_type}
                name="program_type"
                label="Program Type"
                onChange={onInputChange}
                required
                sx={sxConfig}
              >
                {tempProgramType.map((programType) => (
                  <MenuItem key={programType} value={programType}>
                    {programType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {/*Start Year*/}
          {able && (
            <FormControl fullWidth>
              <InputLabel id="start_year_">Start Year</InputLabel>
              <Select
                fullWidth
                labelId="start_year_"
                id="start_year"
                value={start_year}
                name="start_year"
                label="start_year"
                onChange={onInputChange}
                required
                sx={sxConfig}
              >
                {tempStartStudy.map((start) => (
                  <MenuItem key={start} value={start}>
                    {start}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {/*English Level*/}
          <FormControl fullWidth>
            <InputLabel id="EnglishLevel">English Level</InputLabel>
            <Select
              fullWidth
              labelId="EnglishLevel"
              id="EnglishLevelId"
              value={level_english}
              name="level_english"
              label="level_english"
              onChange={onInputChange}
              required
              sx={sxConfig}
            >
              {englishLevel.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/*Options pays*/}
          <FormControl fullWidth>
            <InputLabel id="payOption">Option Pay</InputLabel>
            <Select
              fullWidth
              labelId="payOption"
              id="pay"
              value={pay}
              name="pay"
              label="Option Pay"
              onChange={onInputChange}
              required
              sx={sxConfig}
            >
              {optionPay.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/*BirthDay*/}
          <InputLabel id="datel">Birthday</InputLabel>
          <TextField
            label_id="date"
            type="date"
            variant="filled"
            fullWidth
            name="birthday"
            onChange={onInputChange}
            value={birthday}
            //label='Birthday'
            //placeholder="Birthday"
            //inputProps={isReadOnly}
            sx={sxConfig}
            required
          />
        </Grid>
      </Stack>
    </>
  );

  return (
    //<Button onClick={handleOpen}>Open modal</Button>
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title"> Update Profile </DialogTitle>

        <form onSubmit={onSave}>
          <DialogContent dividers={scroll === 'paper'}>
            {prospectToEdit.first_name} {prospectToEdit.last_name}
            {formulary}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="gris">
              Cancel
            </Button>

            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
