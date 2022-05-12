declare var process: {
  env: {
    REACT_APP_BASE_API: string;
  };
};

const getEnvVariable = async (): Promise<string | boolean | undefined> => {
  const baseApi: string | boolean | undefined = import.meta.env.VITE_BASE_API;

  return baseApi;
};

export default getEnvVariable;
