import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const hwp = (nm) => (hp(nm) + wp(nm)) / 2;
export { hp, wp, hwp };
