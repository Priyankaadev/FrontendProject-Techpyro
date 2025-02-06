'use client'

import { createContext, useContext, useState } from "react";

 

const LoaderContext = createContext()

export function LoaderProvider( {children} ) {
    const [loading, setLoading] = useState(false)

    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
        {children}
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-gray-200 bg-opacity-80 z-50">
            <img src="/aboutus/loader.svg" alt="Loading..." className="w-30 h-30" />
          </div>
        )}
      </LoaderContext.Provider>
    )

}

export function useLoader() {
    return useContext(LoaderContext);
  }