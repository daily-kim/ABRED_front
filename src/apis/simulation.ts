import axios from "axios";
import { host } from ".";

//[TODO] should be change to real api not dummy

// StepBoxA
export const getDongHo = async (id: string): Promise<{ dong: string[], ho: string[] }> => {
  return await axios
    .get(host + "/construction/" + id + "/aprt_info/dong_ho_list")
    .then((res) => {
      const dong = Object.keys(res.data) as string[]; // res.data[0] as string[]; // array of dong string
      const selectedDong = dong[0]
      const ho = res.data[selectedDong] as string[]; // Object.values(res.data) as string[]; // res.data[1] as string[]; // array of ho string
      return { dong, ho };
    });
};

// export const getDong = async (id: string): Promise<string[]> => {
//   return await axios
//     .get(host + "/construction/" + id + "/aprt_info/dong_ho_list")
//     .then((res) => {
//       const dong = Object.keys(res.data) as string[]; // res.data[0] as string[]; // array of dong string
//       return dong;
//     });
// };

// export const getHo = async (id: string): Promise<string[]> => {
//   return await axios
//     .get(host + "/construction/" + id + "/aprt_info/dong_ho_list")
//     .then((res) => {
//       const dong = Object.keys(res.data) as string[]; // res.data[0] as string[]; // array of dong string
//       return dong;
//     });
// };

// // StepBoxA
// export const getDongHo = async (id: string): Promise<{ dong: string[], ho: string[] }> => {
//   const res = await axios.get(host + "/construction/" + id + "/aprt_info/dong_ho_list");
//   const data = res.data as Record<string, string>; // 동호 데이터

//   return { dong: Object.keys(data), ho: Object.values(data)};
// };

export const getLastSimul = async (id: string): Promise<string> => {
  return await axios
    .get(host + "/construction/" + id + "/last_simul_date")
    .then((res) => {
      const result = res.data as string; // array of size number
      return result;
    });
};

export const getSize = async (id: string): Promise<number[]> => {
  const last_simul_date = JSON.stringify(await getLastSimul(id));

  return await axios
    .get(host + "/construction/" + id + "/apart_info/exclusive_area_list?last_simul_date=" + last_simul_date)
    .then((res) => {
      const result = res.data as number[]; // array of size number
      return result;
    });
};

export const getSizeForPre = async (id: string): Promise<number> => {
  const dongho = await getDongHo(id)
  return await axios
    .get(host + "/construction/" + id + '/apart_info/' + dongho['dong'][0] + '/' + dongho['ho'][0] + '/exclusive_area')
    .then((res) => {
      const result = res.data as number; // array of size number
      return result;
    });
};

// StepBoxB
export const getPreprice = async (id: string): Promise<number> => {
  const last_simul_date = JSON.stringify(await getLastSimul(id));
  const area = await getSizeForPre(id)

  return await axios
    .get(host + "/ai_result/" + id + '/' + area + '/price/pre?last_simul_date=' + last_simul_date)
    .then((res) => {
      return res.data as number; // number
    });
};

export const getPresim = async (id: string): Promise<{ areas: number[], prices: number[], years: number[] }> => {
  const last_simul_date = JSON.stringify(await getLastSimul(id));
  const area = await getSizeForPre(id)
  
  return await axios
    .get(host + "/ai_result/" + id + '/' + area + '/pseudo_self_list/pre?last_simul_date=' + last_simul_date)
    .then((res) => {
      const areas = res.data['Area'] as number[];
      const prices = res.data['Price'] as number[]; // array of price number
      const years = res.data['Building_year'] as number[]; // array of year number

      const pricesWithoutDecimal = Object.values(prices).map((price) => Math.floor(price));
      return {areas, prices: pricesWithoutDecimal, years };
    });
};

export const getPrepriceList = async (id: string): Promise<{ data: number[], labels: string[] }> => {
  const area = await getSizeForPre(id)

  return await axios
    .get(host + "/ai_result/" + id + '/' + area + '/prices/pre')
    .then((res) => {
      // console.log(res.data)
      const data = res.data['Data'] as number[]; // array of data number
      const raw_labels = res.data['Labels'] as string[]; // array of label string

      data.sort((a, b) => a - b);
      // Sort labels in ascending order
      raw_labels.sort((a, b) => {
        if (typeof a !== 'string' || typeof b !== 'string') {
          // Handle non-string values by converting them to strings
          a = String(a);
          b = String(b);
        }
        return a.localeCompare(b);
      }); 

      const labels = raw_labels.map((label) => {
        // Modify the string value here
        
        return label.toString()
      });
      return { data, labels };
    });
};

export const getPostprice = async (id: string): Promise<number> => {
  const last_simul_date = JSON.stringify(await getLastSimul(id));
  const area = await getSize(id)
  return await axios
    .get(host + "/ai_result/" + id + '/' + area[0] + '/price/post?last_simul_date=' + last_simul_date)
    .then((res) => {
      return res.data as number; // number
    });
};

export const getPostsim = async (id: string): Promise<{ areas: number[], prices: number[], years: number[] }> => {
  const last_simul_date = JSON.stringify(await getLastSimul(id));
  const area = await getSize(id)

  return await axios
    .get(host + "/ai_result/" + id + '/' + area[0] + '/pseudo_self_list/post?last_simul_date=' + last_simul_date)
    .then((res) => {
      const areas = res.data['Area'] as number[];
      const prices = res.data['Price'] as number[]; // array of price number
      const years = res.data['Building_year'] as number[]; // array of year number
      
      const pricesWithoutDecimal = Object.values(prices).map((price) => Math.floor(price));
      return { areas, prices: pricesWithoutDecimal, years };
    });
};

export const getPostpriceList = async (id: string): Promise<{ data1: (number | null)[], data2: (number | null)[], labels: string[] }> => {
  const area = await getSize(id)
 
  return await axios
    .get(host + "/ai_result/" + id + '/' + area[0] + '/prices/post')
    .then((res) => {
      const raw_labels = res.data['Labels'] as string[]; // array of label string
      // const data1 = res.data[1][0] as (number | null)[]; // array of data number
      const data1 = res.data['Data'] as (number | null)[]; // array of data number
      const data2 = res.data['Data'] as (number | null)[]; // array of data number
      
      const data2WithoutDecimal = data2.map((value) => {
        if (typeof value === 'number') {
          return Math.floor(value);
        }
        return value;
      });

      const labels = raw_labels.map((label) => {
        // Modify the string value here
      
        return label.toString()
      });

      return { data1, data2: data2WithoutDecimal, labels };
    });
};

export const getModelFeature = async (id: string): Promise<{ data: number[], labels: string[] }> => {
  const area = await getSize(id)

  return await axios
    // .get(host + "/construction/" + id + "/feature_importance")
    .get(host + "/ai_result/" + id + '/' + area[0] + '/prices/post')
    .then((res) => {
      const data = res.data.Data as number[]; // array of label string
      const labels = res.data.Labels as string[]; // array of data number
      return { data, labels };
    });
}

// StepBox C
export const getContactland = async (): Promise<number> => {
  return await axios
    .get(host + "/price_simulation/contactland")
    .then((res) => {
      return res.data as number; // number
    });
};

export const getMyland = async (): Promise<number> => {
  return await axios
    .get(host + "/price_simulation/myland")
    .then((res) => {
      return res.data as number; // number
    });
};