﻿using System.Collections.Generic;

namespace Disqord
{
    public sealed class ModifyMessageActionProperties
    {
        public Optional<string> Content { internal get; set; }

        public Optional<LocalEmbed> Embed { internal get; set; }

        public Optional<MessageFlag> Flags { internal get; set; }

        public Optional<IEnumerable<LocalRowComponent>> Components { internal get; set; }

        internal ModifyMessageActionProperties()
        { }
    }
}
