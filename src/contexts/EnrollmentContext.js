import { useState, useEffect } from "react";
import { createContext } from "react";
import useApi from "../hooks/useApi";

const EnrollmentContext = createContext();
export default EnrollmentContext;

export function EnrollmentProvider({ children }) {
  const [enrollmentData, setEnrollmentData] = useState(null);
  const { enrollment } = useApi();

  useEffect(() => {
    enrollment
      .getPersonalInformations()
      .then((res) => {
        setEnrollmentData(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <EnrollmentContext.Provider value={{ enrollmentData, setEnrollmentData }}>
      {children}
    </EnrollmentContext.Provider>
  );
}
