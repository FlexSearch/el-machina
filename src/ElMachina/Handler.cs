using FlexSearch.Api.Model;
using Microsoft.FSharp.Core;
using System;
using static FlexSearch.Core.Http;

namespace ElMachina
{
    [FlexSearch.Core.Name("GET-/elmachina")]
    public class GetMachineName : HttpHandlerBase<NoBody, string>
    {
        public GetMachineName()
            : base(new FSharpOption<bool>(false), new FSharpOption<bool>(false))
        { }

        public override ResponseContext<string> Process(RequestContext request, FSharpOption<NoBody> body)
        {
            return ResponseContext<string>.SuccessResponse.NewSuccessResponse(Environment.MachineName, Ok);
        }
    }
}
