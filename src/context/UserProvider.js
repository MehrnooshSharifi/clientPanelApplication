import { GetUserInfo } from "@/server/Service";
import { createContext, useContext, useEffect } from "react";
import { useReducerAsync } from "use-reducer-async";
import { useCookies } from "react-cookie";
const UserContext = createContext();
const UserContextDeispatch = createContext();
const initialState = { user: null, loading: true, error: false };
const reducer = (state, action) => {
  switch (action.type) {
    case "userInfo_pending":
      return { user: null, loading: true, error: false };
    case "userInfo_success":
      return { user: action.payload, loading: false, error: false };
    case "userInfo_reject":
      return { user: null, loading: false, error: action.error };
    default:
      return { ...state };
  }
};

const AsyncActionHandlers = {
  userInfo:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "userInfo_pending" });
      await GetUserInfo(action.payload)
        .then(({ data }) =>
          dispatch({ type: "userInfo_success", payload: data })
        )
        .catch((error) =>
          dispatch({ type: "userInfo_reject", error: error.message })
        );
    },
};

const UserProvider = ({ children }) => {
  const [cookies] = useCookies();
  const nationalCode = cookies.nationalCode;
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    AsyncActionHandlers
  );
  useEffect(() => {
    dispatch({ type: "userInfo", payload: nationalCode });
  }, []);
  return (
    <UserContext.Provider value={user}>
      <UserContextDeispatch.Provider value={dispatch}>
        {children}
      </UserContextDeispatch.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext);
export const useUserAction = () => useContext(UserContextDeispatch);
