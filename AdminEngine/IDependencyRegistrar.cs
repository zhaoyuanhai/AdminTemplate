﻿using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdminEngine
{
    public interface IDependencyRegistrar
    {
        /// <summary>
        /// Register services and interfaces
        /// </summary>
        /// <param name="builder">Container builder</param>
        /// <param name="typeFinder">Type finder</param>
        /// <param name="config">Config</param>
        void Register(ContainerBuilder builder, ITypeFinder typeFinder);

        /// <summary>
        /// Order of this dependency registrar implementation
        /// </summary>
        int Order { get; }
    }
}
