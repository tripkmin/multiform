import { nameRegex } from './regex';

export const nameChecker = (name: string) => {
  if (name.trim().length === 0) {
    return { status: false, message: 'Blank input is not allowed' };
  } else if (name.length > 30) {
    return { status: false, message: 'Cannot exceed 30 characters' };
  } else if (!nameRegex.test(name)) {
    return { status: false, message: 'Only English letters are allowed' };
  } else {
    return { status: true, message: '' };
  }
};
